import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: "https://vueportfolio-3c3r.onrender.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export function useApollo() {
  return provideApolloClient(apolloClient);
}
