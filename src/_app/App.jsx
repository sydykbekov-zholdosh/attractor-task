import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Root from './Root';
import { store } from '../_helpers/store';
import { history } from '../_helpers/history';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider>
          <Root/>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
