import { profileTypeDefs } from "./schema/profile.schema";
import { techStackTypeDefs } from "./schema/techStack.schema";
import { experienceTypeDefs } from "./schema/experience.schema";
import { dateResolver, dateTypeDef } from "./scalars/date.scalar";

/** Resolvers */
import { profileResolvers } from "./resolvers/profile.resolver";
import { experienceResolver } from "./resolvers/experience.resolver";
import { techStackResolvers } from "./resolvers/techStack.resolver";

/** Resolvers */

export const typeDefs = [
  dateTypeDef,
  profileTypeDefs,
  techStackTypeDefs,
  experienceTypeDefs,
];
export const resolvers = [
  dateResolver,
  profileResolvers,
  techStackResolvers,
  experienceResolver,
];
