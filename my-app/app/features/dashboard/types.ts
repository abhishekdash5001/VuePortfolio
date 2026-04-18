import { type ProfileQuery ,type Social, type TechStackValue} from "~/graphql/generated";

export type Profile = Extract<
  ProfileQuery["profile"],
  { __typename?: "ProfileValue" }
>;

export type {Social};
export type {TechStackValue}


export  type TechStack = TechStackValue["stacks"][number];

export type NavigationItem = {
  label: string;
  to: string;
};
