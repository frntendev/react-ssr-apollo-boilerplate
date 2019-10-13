/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const styles = {
  container: css`
    font-family: 'Open Sans';
    background-color: transparent;
    padding: 20px;
  `,
  button: css`
    background-color: pink;
    &:hover {
      background-color: red;
    }
  `,
  link: css`
    text-decoration: none;
  `,
  buttonContainer: css`
    margin-top: 20px;
  `,
};

const AboutPage = () => {
  return (
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
  );
};

export default AboutPage;
