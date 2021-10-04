import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main }  from './app/main';
import AppStateProvider from './app/provider';
import ContextRoute from './app/contextroute';
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <Main />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
