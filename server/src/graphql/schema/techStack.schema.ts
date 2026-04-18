import gql from "graphql-tag";

export const techStackTypeDefs = gql`
  type TechStackError {
    message: String!
  }

  type TechStack {
    name: String!
    url: String!
  }

  type TechStackValue {
    stacks: [TechStack!]!
  }

  union TechStackResult = TechStackValue | TechStackError

  type Query {
    techStack: TechStackResult
  }
`;
