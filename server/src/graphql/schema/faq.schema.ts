import gql from "graphql-tag";

export const faqTypeDefs = gql`
  type FaqError {
    message: String!
  }

  type FaqItem {
    question: String!
    answer: String!
  }

  type Faq {
    tabName: String!
    faqItems: [FaqItem!]!
  }

  type FaqValue {
    faqs: [Faq!]!
  }

  union FaqResult = FaqValue | FaqError

  type Query {
    faq: FaqResult
  }
`;
