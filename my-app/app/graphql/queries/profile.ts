// ~/graphql/queries/profile.ts

import { gql } from "@apollo/client/core";

export const PROFILE_QUERY = gql`
  query Profile {
    profile {
      name
      careerStartDate
      location
      title
    }
  }
`;
