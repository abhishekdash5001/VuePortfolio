import { readJson } from "../utils/readJson";
import type { FaqResult } from "../../generated/graphql";

export const faqResolver = {
  FaqResult: {
    __resolveType(obj: FaqResult) {
      if ("message" in obj) {
        return "FaqError";
      }

      return "FaqValue";
    },
  },

  Query: {
    faq: () => {
      return {
        faqs:readJson("faq")
      }
    }
  },
};
