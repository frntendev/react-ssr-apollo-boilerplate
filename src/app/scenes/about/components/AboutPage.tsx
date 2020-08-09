/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from './AboutPage.styles';

const AboutPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <div css={styles.container}>
        <h1>About Page</h1>
        <Link to="/" css={styles.link}>
          Go to Home Page
        </Link>

        <p>
          If you do the refresh in this page and then navigate to home page, you will see the client
          side fetching.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
