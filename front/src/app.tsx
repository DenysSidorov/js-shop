import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {client} from './apollo';
import store, {history} from './redux/store/configureStore';
import Wrapper from './components/index';
import {ApolloClient, NormalizedCacheObject, ApolloCache} from '@apollo/client';
// import WrapperTest from './components/test';

const App = hot(Wrapper);

export const client = new ApolloClient<{}>({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // cache: ApolloCache
  // uri: `${config.SERVER_DOMAIN}:${config.SERVER_PORT}/graphql`
});

const container = document.getElementById('main');
if (container) {
  ReactDom.render(
    <Provider store={store}>
      <div>
        <ApolloProvider client={client}>
          <Router history={history}>
            <App/>
          </Router>
        </ApolloProvider>
      </div>
    </Provider>,
    container
  );
}

console.log(process.env.NODE_ENV, ' MODE IN REACT');
