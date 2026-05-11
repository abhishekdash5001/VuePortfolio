import {
  type ProfileQuery,
  type ExperienceValue,
  type Social,
  type TechStackValue,
  Theme
} from "~/graphql/generated";

export type Profile = Extract<
  ProfileQuery["profile"],
  { __typename?: "ProfileValue" }
>;

export type { Social };
export type { TechStackValue };
export type { ExperienceValue };
export {Theme}

export type TechStack = TechStackValue["stacks"][number];

export type NavigationItem = {
  label: string;
  to: string;
};

export const ERRORS = {
  techStack: " Failed to fetch techStack details",
  profile: "Failed to fetch Profiles details",
  experienceAboutMe:'Failed to fetch experience details'
} as const;
