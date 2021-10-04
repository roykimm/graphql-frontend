import React, { useState, useEffect, useContext } from 'react';

import { AppStateContext, fetchAccessToken } from '../provider';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';
import { Header } from './header';
import { Showmenu } from './showmenu';
import { Footer } from './footer';
import { Modal } from '../modal';

export const Dashboard : React.FC = () => {

    const { appState, gqlError , appSetAlert} = useContext(AppStateContext);
    const history = useHistory();

    useEffect(() => {
        console.log(appState.loggedIn);
        if(!appState.loggedIn){
            history.replace('/login');
        }
    })

    return (
        <div>
            <Header />
            <Showmenu />
            <Footer />
        </div>
    )   
}