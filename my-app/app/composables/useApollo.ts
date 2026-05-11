import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";


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

  return apolloClient;
}
