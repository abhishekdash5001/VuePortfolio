import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

export function useApollo() {
  const config = useRuntimeConfig();

  const apolloClient = new ApolloClient({
    link: createHttpLink({
      uri: config.public.graphqlUrl,
    }),
    cache: new InMemoryCache(),
  });

  return provideApolloClient(apolloClient);
}
