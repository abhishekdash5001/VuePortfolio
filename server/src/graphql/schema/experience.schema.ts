import gql from "graphql-tag";

export const experienceTypeDefs = gql`

type Color {
  name: String!
  hex: String!
}

  type Experience {
    companyName: String!
    designation: String!
    startDate: Date!
    endDate: Date
    color: Color!
  }

  type ExperienceValue {
    experience: [Experience!]!
  }

  type ExperienceError {
    message: String!
  }

  union ExperienceResult = ExperienceValue | ExperienceError

  type Query {
    experience: ExperienceResult
  }
`;
