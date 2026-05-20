import { type FaqValue, type FaqTab,type FaqTabUI  } from "../types";

import type { TabsItem } from '@nuxt/ui'

export const faqTabsMapper = (faqs: FaqValue["faqs"]): FaqTabUI[] => {
  return faqs.map((faqTab: FaqTab) => {
    return {
      label: faqTab.tabName,
      items:faqTab.faqItems.map((item)=>{
        return {
            label:item.question,
            content:item.answer
        }
      })
    };
  });
};
