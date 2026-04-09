// datasource/profileDataSource.ts

import { useApollo } from "~/composables/useApollo";

import { PROFILE_QUERY } from "~/graphql/queries";

import {
  type ProfileQuery,
  type ProfileQueryVariables,
} from "~/graphql/generated";

export function fetchProfile() {
  const client = useApollo();

  return client.query<ProfileQuery, ProfileQueryVariables>({
    query: PROFILE_QUERY,
    fetchPolicy: "no-cache",
  });
}
