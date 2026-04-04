import { profileTypeDefs } from "./schema/profile.schema";
import { dateResolver,dateTypeDef } from "./scalars/date.scalar";
import { profileResolvers } from "./resolvers/profile.resolver";

export const typeDefs=[dateTypeDef,profileTypeDefs]
export const resolvers=[dateResolver,profileResolvers]