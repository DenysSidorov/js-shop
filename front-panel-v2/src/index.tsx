import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyApp from './MyApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyApp/>
  </React.StrictMode>,
  document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
