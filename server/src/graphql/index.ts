import { profileTypeDefs } from "./schema/profile.schema";
import { techStackTypeDefs } from "./schema/techStack.schema";
import { dateResolver,dateTypeDef } from "./scalars/date.scalar";

/** Resolvers */
import { profileResolvers } from "./resolvers/profile.resolver";
import { techStackResolvers } from "./resolvers/techStack.resolver";

/** Resolvers */

export const typeDefs=[dateTypeDef,profileTypeDefs,techStackTypeDefs]
export const resolvers=[dateResolver,profileResolvers,techStackResolvers]