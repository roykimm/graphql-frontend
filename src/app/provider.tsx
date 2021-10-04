import React, { createContext, useState, ReactNode } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, Observable } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import JwtDecode from 'jwt-decode';
import { trace } from "console";

let authToken = '';
const initial = {
  appState: { loggedIn: false , alert : false, alertMsg : '', email: "", username: ""},
  gqlError: { msg: '' },
  appSetLogin: (token: string, email : string, username: string) => { },
  appSetLogout: () => { },
  appSetAuthToken: (token: string) => { },
  appClearAuthToken: () => { },
  appSetAlert : ({alert,alertMsg} :{alert: boolean, alertMsg: string}) => { },
}

export const AppStateContext = createContext(initial);

function AppStateProvider({ children }: { children: ReactNode }) {
  // app state
  console.log("AppStateProvider")
  const [appState, setAppState] = useState({ loggedIn: false , email: "", username: "", alert : false, alertMsg : ''});
  const [gqlError, setGQLError] = useState({ msg: '' });

  const appSetAlert = ({alert,alertMsg} :{alert: boolean, alertMsg: string} ) => {
    setAppState({...appState, alert : alert, alertMsg : alertMsg});
  }

  const appSetLogin = (token: string, email: string, username : string) => {
    authToken = token;
    setAppState({ ...appState, loggedIn: true , email : email, username: username});
  };

  const appSetLogout = () => {
    authToken = '';
    setAppState({ ...appState, loggedIn: false });
  };

  const appSetAuthToken = (token: string) => { authToken = token; };
  const appClearAuthToken = () => { authToken = ''; };
  const appGetAuthToken = (): string => { return authToken; };

  // apollo client
  const cache = new InMemoryCache({});
  const requestLink = new ApolloLink((operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          operation.setContext({ headers: { authorization: `Bearer ${appGetAuthToken()}` } });
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) handle.unsubscribe();
      };
    })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: 'access_token',
        isTokenValidOrUndefined: () => {
          const token = appGetAuthToken();
          if (token.length === 0) return true;
          try {
            const { exp } = JwtDecode(token);
            return Date.now() < exp * 1000;
          } catch {
            return false;
          }
        },
        fetchAccessToken,
        handleFetch: accessToken => {
          console.log(`handleFetch: ${accessToken}`);
          appSetAuthToken(accessToken);
        },
        handleResponse: (operation, accessTokenField) => {
          console.log(`handleResponse: ${accessTokenField}`);
          console.log(operation);
        },
        handleError: err => {
          console.log(`handleError: ${err}`);
          appSetLogout();
        }
      }),
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors === undefined || graphQLErrors[0].path === undefined) return;
        if (graphQLErrors[0].path[0] === 'refresh') return;
        const err = graphQLErrors[0].message;
        setGQLError({ msg: err });
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:5000/graphql',
        credentials: 'include'
      })
    ]),
    cache
  });

  return (
    <AppStateContext.Provider value={{
      appState,
      gqlError,
      appSetLogin,
      appSetLogout,
      appSetAuthToken,
      appClearAuthToken,
      appSetAlert,
    }}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;

export const fetchAccessToken = async (): Promise<any> => {
  const payload = {
    operationName: "Refresh",
    variables: {},
    query: 'mutation Refresh {\n refresh {\n access_token\n __typename\n}\n}\n'
  };
  return fetch('http://localhost:5000/graphql', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': "application/json; charset=utf-8",
      'Accept': 'application/json',
    }
  })
    .then(async (res) => {
      const response = await res.json();
      console.log('fetchAccessToken');
      console.log(response.data.refresh);
      return response.data.refresh;
    });
};