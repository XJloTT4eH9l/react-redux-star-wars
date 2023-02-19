import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from '@store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@context/ThemeProvider';

import App from '@containers/App';
import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
          <BrowserRouter basename='/react-redux-star-wars/'>
            <App />
          </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

