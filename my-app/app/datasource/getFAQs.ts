
import { useApollo } from "~/composables/useApollo";
import { FAQ_QUERY } from "~/graphql/queries";


import {
  type FaqQuery,
  type FaqQueryVariables,
} from "~/graphql/generated";

export function fetchFaqs() {
  const client = useApollo();

  return client.query<FaqQuery, FaqQueryVariables>({
    query: FAQ_QUERY,
    fetchPolicy: "cache-first",
  });
}
