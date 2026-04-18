
import { useApollo } from "~/composables/useApollo";
import { TECH_STACK_QUERY } from "~/graphql/queries";


import {
  type TechStackQuery,
  type TechStackQueryVariables,
} from "~/graphql/generated";

export function fetchTechStack() {
  const client = useApollo();

  return client.query<TechStackQuery, TechStackQueryVariables>({
    query: TECH_STACK_QUERY,
    fetchPolicy: "cache-first",
  });
}
