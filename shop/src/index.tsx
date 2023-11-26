import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/main.scss';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
} else {
  createRoot(rootElement).render(<div>Hellado world</div>);
}

if (module.hot) {
  module.hot.accept();
}
