import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

let apolloClient: ApolloClient<any> | null = null;

export function useApollo() {
  const config = useRuntimeConfig();

  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: createHttpLink({
        uri: config.public.graphqlUrl,
      }),

      cache: new InMemoryCache(),
    });
  }

  return provideApolloClient(apolloClient);
}
