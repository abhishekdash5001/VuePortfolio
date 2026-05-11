import { gql } from "@apollo/client/core";

export const EXPERIENCE_ABOUT_ME_QUERY = gql`
  query experienceAboutMe {
   experience {
    ... on ExperienceValue {
      experience {
        companyName
        color {
          hex
        }
        designation
        endDate,
        startDate

      }
    }
    ... on ExperienceError {
      message
    }
  }
  }
`;
