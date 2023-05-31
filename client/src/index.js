import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';



createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);
