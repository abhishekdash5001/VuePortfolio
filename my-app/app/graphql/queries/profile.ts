// ~/graphql/queries/profile.ts

import { gql } from "@apollo/client/core";

export const PROFILE_QUERY = gql`
  query Profile {
    profile {
      ... on ProfileValue {
        name
         social
     {
        github,
        linkedin
     }
        shortBio
        bio
       
         title
        image{
        alt
        url
      
     }
      }
      ... on ProfileError {
        message
      }
    }
  }
`;
