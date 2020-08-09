import { css } from '@emotion/core';

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

export default styles;
