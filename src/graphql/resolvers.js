import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Mutation {
    ToogleCartHidden: Boolean!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const resolvers = {
  Mutation: {
    toogleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      });

      return !cartHidden;
    }
  }
};
