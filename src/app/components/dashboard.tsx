import React, { useState, useEffect, useContext } from 'react';

import { AppStateContext, fetchAccessToken } from '../provider';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { Header } from './header';
import { Showmenu } from './showmenu';
import { Footer } from './footer';
import { Modal } from '../modal';

export const Dashboard : React.FC = () => {

    const { appState, gqlError , appSetAlert, appSetAlertMsg} = useContext(AppStateContext);
    const history = useHistory();

    useEffect(() => {
        console.log(appState.loggedIn);
        if(!appState.loggedIn){
            history.replace('/login');
        }
    })

    const modaltest = () => { 
        console.log(appState.loggedIn)
        appSetAlertMsg('this is test');
        appSetAlert(true);
    }

    return (
        <div>
            <div className="px-5 mt-3">
                <Header />
                <Showmenu />
            </div>
            <button onClick={modaltest}className="bg-gray-100">메세지 띄우기</button>
            <Footer />
        </div>
    )   
}