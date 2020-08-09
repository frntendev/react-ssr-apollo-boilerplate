/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet-async';

import { User } from '../../../graphql/types';
import { UsersQuery } from './HomePage.gql';
import { GqlResponse } from './HomePage.types';
import styles from './HomePage.styles';

const Users = () => {
  const { loading, error, data } = useQuery<GqlResponse>(UsersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data ? (
    <div css={styles.articleContainer}>
      {data.users.data.map(({ name, email }: User) => (
        <div key={name}>
          {name} : {email}
        </div>
      ))}
    </div>
  ) : (
    <div>There are no users</div>
  );
};

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div css={styles.container}>
        <h1>Home Page</h1>
        <Link to="/about" css={styles.link}>
          Go to About Page
        </Link>
        <div css={styles.buttonContainer}>
          <Users />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
