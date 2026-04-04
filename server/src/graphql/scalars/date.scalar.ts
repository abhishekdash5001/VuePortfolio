import { DateResolver } from "graphql-scalars";

export const dateTypeDef = /* GraphQL */ `
  scalar Date
`;

export const dateResolver = {
  Date: DateResolver
};