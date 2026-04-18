import { readJson } from "../utils/readJson";
import type { TechStackResult, TechStackValue } from "../../generated/graphql";

export const techStackResolvers = {
  TechStackResult: {
    __resolveType(obj: TechStackResult) {
      if ("message" in obj) {
        return "TechStackError";
      }

      return "TechStackValue";
    },
  },

  Query: {
    techStack: (): TechStackValue => {
      return {
        stacks: readJson("techStack"),
      };
    },
  },
};
