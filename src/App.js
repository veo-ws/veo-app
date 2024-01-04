import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppContextProvider from '@veo/context/AppContextProvider';
import AppThemeProvider from '@veo/context/AppThemeProvider';
import AppStyleProvider from '@veo/context/AppStyleProvider';
import AppLocaleProvider from '@veo/context/AppLocaleProvider';
import { BrowserRouter } from 'react-router-dom';
import AppAuthProvider from '@veo/core/AppAuthProvider';
import AuthRoutes from '@veo/components/AuthRoutes';
function App() {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <BrowserRouter>
              <AppAuthProvider>
                <AuthRoutes>
                  <div className='App'>
                    <header className='App-header'>
                      <img src={logo} className='App-logo' alt='logo' />
                      <p>
                        Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Learn Reactss
                      </a>
                    </header>
                  </div>
                </AuthRoutes>
              </AppAuthProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
