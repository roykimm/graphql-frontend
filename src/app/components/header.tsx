import React, { useState, useEffect, useContext } from 'react';
import { useLogoutMutation } from '../../gql/generated/graphql';
import { BrowserRouter as Router, Switch, Route, Link, Redirect , useHistory} from 'react-router-dom';
import { AppStateContext, fetchAccessToken } from '../provider';

export const Header : React.FC = () => {

    const { appState, appSetLogin, appSetLogout, gqlError , appSetAlert} = useContext(AppStateContext);
    const [ logout ] = useLogoutMutation();

    const history = useHistory();

    const openErrorMessageBox = () => { 
        const msg = gqlError.msg;
        appSetAlert({alert : true, alertMsg : msg});
    }

    const logoutHandler = async () => {

        try{
            const {data} = await logout();
            if(data === undefined || !data){
              throw new Error('Server error');
            }
            appSetLogout();
            history.replace('/dashboard');
        } catch(err) {
            openErrorMessageBox();
        }
    }

    return (
        <div className="flex items-center justify-between py-3 px-3 bg-gray-200">
            <div className="">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Gobella Application
                </h2>
            </div>
            <div className="flex align-center justify-center">
                <h4 className="text-sm mr-5 align-center pt-1">안녕하세요? {appState.username} 님</h4>
                <button onClick={logoutHandler} type="button" className="items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                로그아웃
                </button>
            </div>
        </div>
    )
}