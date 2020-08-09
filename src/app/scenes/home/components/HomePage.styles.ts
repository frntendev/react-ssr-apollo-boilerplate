import { css } from '@emotion/core';

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

export default styles;
