import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HelmetProvider } from 'react-helmet-async';

import App from '../app/App';
import { GRAPHQL_ENDPOINT } from '../app/graphql/variables';

function Main() {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: GRAPHQL_ENDPOINT,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

hydrate(<Main />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') if (module.hot) module.hot.accept();
