import React from 'react';
import { Route } from 'react-router-dom';

const ContextRoute  = ({ provider, component, path } : { provider : any, component : any, path: string}) => {

    const { Provider } = provider;
    const paths = path;
    const Component = component;

    return (
        <Route path={paths}>
            <Provider>
                <Component />
            </Provider>
        </Route>
    )
}

export default ContextRoute;