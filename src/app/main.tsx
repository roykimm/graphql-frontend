import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AppStateContext, fetchAccessToken } from './provider';
import { useLogoutMutation } from '../gql/generated/graphql';
import { Home } from './home';
import { Login } from './login';
import { LoginNew } from './loginNew';
import { Register } from './register';
import { Profile } from './profile';
import { NotFound } from './notfound';
import { Confirm } from './confirm';
import { ResendConfirm} from './resend_confirm';
import { ForgotPassword } from './forgot_password';
import { ResetPassword } from './reset_password';
import { FileUpload } from './upload';
import { Dashboard } from './components/dashboard';
import { Memo } from './components/memo';
import { Todo } from './components/todo';
import { Modal } from './modal';

let initialized = false;
export const Main: React.FC = () => {
  const [ loading, setLoading ] = useState(true);
  const [ show, setShow ] = useState(false);
  const { appState, appSetLogin, appSetLogout, gqlError } = useContext(AppStateContext);
  const [ logout ] = useLogoutMutation();

  useEffect(() => {
    if (initialized) return;
    initialized =true;
    fetchAccessToken()
      .then((data:any) => {
        const failed = data === undefined || data?.access_token === undefined;
        failed ? appSetLogout() : appSetLogin(data?.access_token!, '', '');
      })
      .catch((e) => {
        appSetLogout();
      })
      .finally(() => {
        setLoading(false);
      })
  });

  if (loading)
    return <div>Loading....</div>

  return (
    <Router>
      <div>
        {/* <header>
          {
            appState.loggedIn? 
              <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/profile">Profile</Link></div>
                <div><Link to="#" onClick={async (event) => {
                  try{
                    setShow(false);
                    const data = await logout();
                    if(data === undefined || !data){
                      throw new Error('Server error');
                    }
                    appSetLogout();
                  } catch(err) {
                    setShow(true);
                  }
                }}>Logout</Link></div>
                {show? <div>{gqlError.msg}</div> : undefined}
              </div> :
              <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/register">Register</Link></div>
                <div><Link to="/login">Login</Link></div>
              </div>
          }
        </header> */}
        <Modal/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register">{appState.loggedIn? <Redirect to="/" />: <Register />}</Route>
          <Route exact path="/login">{appState.loggedIn? <Redirect to="/dashboard" />: <LoginNew />}</Route>
          <Route exact path="/confirm/:token">{appState.loggedIn? <Redirect to="/" />: <Confirm />}</Route>
          <Route exact path="/profile">{appState.loggedIn? <Profile />: <Redirect to="/login" />}</Route>
          <Route exact path="/resend-confirm">{appState.loggedIn? <Redirect to="/" />: <ResendConfirm />}</Route>
          <Route exact path="/forgot-password">{appState.loggedIn? <Redirect to="/" />: <ForgotPassword />}</Route>
          <Route exact path="/reset-password/:token">{appState.loggedIn? <Redirect to="/" />: <ResetPassword />}</Route>
          <Route exact path="/fileupload"><FileUpload /></Route>
          <Route exact path="/dashboard"><Dashboard /></Route>
          <Route exact path="/memo"><Memo /></Route>
          <Route exact path="/todo"><Todo /></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}