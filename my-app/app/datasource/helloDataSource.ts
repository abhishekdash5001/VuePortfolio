// dataSources/helloDataSource.ts

import { useQuery } from "@vue/apollo-composable";
import { useApollo } from "~/composables/useApollo";
import { HELLO_QUERY } from "~/graphql/queries";

import { type QueryQuery, type QueryQueryVariables } from "~/graphql/generated";

export function fetchHello() {
  return useApollo()(() =>
    useQuery<QueryQuery, QueryQueryVariables>(HELLO_QUERY, null, {
      fetchPolicy: "cache-first",
    }),
  );
}
