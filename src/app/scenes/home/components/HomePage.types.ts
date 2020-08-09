import { User } from 'app/graphql/types';

export type GqlResponse = {
  users: {
    data: User[];
  };
};
