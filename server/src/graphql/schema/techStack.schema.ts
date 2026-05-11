import gql from "graphql-tag";

export const techStackTypeDefs = gql`
  type TechStackError {
    message: String!
  }

  enum Theme {
    dark
    light
    all
  }

  type TechStack {
    name: String!
    url: String!
    theme: Theme!
  }

  type TechStackValue {
    stacks: [TechStack!]!
  }

  union TechStackResult = TechStackValue | TechStackError

  type Query {
    techStack: TechStackResult
  }
`;
