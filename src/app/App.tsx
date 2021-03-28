/** @jsx jsx */
import React from 'react';

import { jsx, css, Global } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';

import routes from '../app/routes';

const App: React.FC<any> = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <div
        css={css`
          padding: 20px;
          color: #fff;
          box-shadow: 0 5px 11px rgba(1, 1, 1, 0.3);
          background-color: #101e52;
          font-family: 'Open Sans';
        `}
      >
        <h1>React SSR Apollo Boilerplate</h1>
      </div>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default App;
