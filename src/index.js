import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './Main.jsx';
import store from './store'; // Ensure this path is correct

console.log('Store in index.js:', store); // Add this line to log the store object

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
);
