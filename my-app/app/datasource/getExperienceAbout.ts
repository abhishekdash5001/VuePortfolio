
import { useApollo } from "~/composables/useApollo";
import { EXPERIENCE_ABOUT_ME_QUERY } from "~/graphql/queries";


import {
  type ExperienceAboutMeQuery,
  type ExperienceAboutMeQueryVariables,
} from "~/graphql/generated";

export function fetchExperienceAboutMe() {
  const client = useApollo();

  return client.query<ExperienceAboutMeQuery, ExperienceAboutMeQueryVariables>({
    query: EXPERIENCE_ABOUT_ME_QUERY,
    fetchPolicy: "cache-first",
  });
}
