import React from 'react';
// import logo from './logo.svg';
import './assets/scss/themes.scss';
import { Provider } from 'react-redux';

import AppContextProvider from '@veo/context/AppContextProvider';
import AppThemeProvider from '@veo/context/AppThemeProvider';
import AppStyleProvider from '@veo/context/AppStyleProvider';
import AppLocaleProvider from '@veo/context/AppLocaleProvider';
import { BrowserRouter } from 'react-router-dom';
import AppAuthProvider from '@veo/core/AppAuthProvider';
import AuthRoutes from '@veo/components/AuthRoutes';
import AppLayout from '@veo/core/AppLayout';
import configureStore from './toolkit/store';

const store = configureStore();

function App() {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <AppStyleProvider>
            <AppLocaleProvider>
              <BrowserRouter>
                <AppAuthProvider>
                  <AuthRoutes>
                    <AppLayout />
                  </AuthRoutes>
                </AppAuthProvider>
              </BrowserRouter>
            </AppLocaleProvider>
          </AppStyleProvider>
        </AppThemeProvider>
      </Provider>
    </AppContextProvider>
  );
}

export default App;
