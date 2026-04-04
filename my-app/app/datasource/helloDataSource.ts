// dataSources/helloDataSource.ts

import { useQuery } from "@vue/apollo-composable";
import { useApollo } from "~/composables/useApollo";
import { PROFILE_QUERY } from "~/graphql/queries";

import {
  type ProfileQuery,
  type ProfileQueryVariables,
} from "~/graphql/generated";

export function fetchHello() {
  return useApollo()(() =>
    useQuery<ProfileQuery, ProfileQueryVariables>(PROFILE_QUERY, null, {
      fetchPolicy: "cache-first",
    }),
  );
}
