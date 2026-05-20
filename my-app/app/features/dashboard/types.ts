import type { AccordionItem } from '@nuxt/ui'
import {
  type ProfileQuery,
  type ExperienceValue,
  type Social,
  type TechStackValue,
  type FaqValue,
  type FaqItem,
  Theme,
} from "~/graphql/generated";

export type Profile = Extract<
  ProfileQuery["profile"],
  { __typename?: "ProfileValue" }
>;

export type { Social };
export type { TechStackValue };
export type { ExperienceValue };
export type { FaqValue };
export { Theme };

export type TechStack = TechStackValue["stacks"][number];
export type FaqTab= FaqValue['faqs'][number]

export type {FaqItem}

export type FaqTabUI= {
  label:string
  items:AccordionItem[]
 
}

export type NavigationItem = {
  label: string;
  to: string;
};

export const ERRORS = {
  techStack: " Failed to fetch techStack details",
  profile: "Failed to fetch Profiles details",
  experienceAboutMe: "Failed to fetch experience details",
  faqs: "Failed to fetch FAQS",
} as const;
