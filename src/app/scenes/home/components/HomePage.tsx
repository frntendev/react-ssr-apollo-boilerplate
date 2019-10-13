/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../../../graphql/types';

const DISPLAY_USERS = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

type Response = {
  users: User[];
};

const styles = {
  container: css`
    background-color: transparent;
    padding: 20px;
    font-family: 'Open Sans';
  `,
  link: css`
    text-decoration: none;
    font-weight: 900;
  `,
  buttonContainer: css`
    margin-top: 20px;
  `,
  articleContainer: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  `,
  articleTitle: css`
    text-decoration: none;
    line-height: 30px;
  `,
};

const Users = () => {
  const { loading, error, data } = useQuery<Response>(DISPLAY_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data ? (
    <div css={styles.articleContainer}>
      {data.users.map(({ name, email }: User) => (
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
    <div css={styles.container}>
      <h1>Home Page</h1>
      <Link to="/about" css={styles.link}>
        Go to About Page
      </Link>
      <div css={styles.buttonContainer}>{Users()}</div>
    </div>
  );
};

export default HomePage;
