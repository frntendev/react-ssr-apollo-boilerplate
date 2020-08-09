import React from 'react';
import * as express from 'express';
import fetch from 'node-fetch';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderToStringWithData } from '@apollo/react-ssr';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HelmetProvider } from 'react-helmet-async';

import { GRAPHQL_ENDPOINT } from 'app/graphql/variables';

import App from '../../app/App';
import Html from '../components/HTML';

const helmetContext = {};
const routerContext = {};

const serverRenderer: any = () => async (req: express.Request, res: express.Response) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: GRAPHQL_ENDPOINT,
      credentials: 'same-origin',
      fetch: fetch as any,
    }),
    cache: new InMemoryCache(),
    ssrForceFetchDelay: 100,
  });

  const Application = (
    <ApolloProvider client={client}>
      <Router location={req.url} context={routerContext}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </Router>
    </ApolloProvider>
  );

  renderToStringWithData(Application).then((content) => {
    const initialApolloState = client.extract();

    return res.send(
      '<!doctype html>' +
        renderToStaticMarkup(
          <Html
            scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
            initialApolloState={JSON.stringify(initialApolloState)}
            helmetContext={helmetContext}
          >
            {content}
          </Html>
        )
    );
  });
};

export default serverRenderer;
