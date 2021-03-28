import React from 'react';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { renderToStringWithData } from '@apollo/client/react/ssr';
import * as express from 'express';
import fetch from 'isomorphic-fetch';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
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
      fetch,
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
