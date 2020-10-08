import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const uri = 'localhost:3000';

const httpLink = new HttpLink({uri});
const restLink = new RestLink({uri});

export default new ApolloClient({
  link: ApolloLink.from([restLink, httpLink]),
  cache: new InMemoryCache(),
});
