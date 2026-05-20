// ~/graphql/queries/techStack.ts

import { gql } from "@apollo/client/core";

export const FAQ_QUERY = gql`
   query FAQ {
   faq {
    ... on FaqValue {
     faqs{
        tabName
        faqItems{
            question
            answer
        }
     }
    }
    ... on FaqError {
      message
    }
  }
  }
`;
