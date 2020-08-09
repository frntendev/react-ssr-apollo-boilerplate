import gql from 'graphql-tag';

export const UsersQuery = gql`
  query {
    users {
      data {
        name
        email
        id
      }
    }
  }
`;
