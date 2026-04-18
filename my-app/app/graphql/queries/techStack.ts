// ~/graphql/queries/techStack.ts

import { gql } from "@apollo/client/core";

export const TECH_STACK_QUERY = gql`
query TechStack {
  techStack {
    ... on TechStackValue {
      stacks {
        name
        url
      }
    }
    ... on TechStackError{
      message
    }
  }
}
`;
