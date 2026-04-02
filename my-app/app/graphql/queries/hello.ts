import { gql } from '@apollo/client/core'

export const HELLO_QUERY = gql`
  query Query {
    hello
  }
`
