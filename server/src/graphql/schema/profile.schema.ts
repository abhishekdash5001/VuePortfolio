
import gql from "graphql-tag";


export const profileTypeDefs = gql`


type Skills {
  frontend:[String!]!
  backend:[String!]!
  database:[String!]!
  devops:[String!]!
}

type Social {
github:String
linkedin:String!
twitter:String
leetcode:String

}

type Contact {
  email: String!
  phone: String
  website: String
}

type Profile {
name:String!
title:String!
location:String!
careerStartDate:Date!
skills:Skills!
social:Social!
tagline:String!
contact:Contact!
}

type Query {
  profile: Profile!
}

`;
