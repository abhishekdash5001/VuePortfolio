import { type ProfileQuery ,type Social} from "~/graphql/generated";

export type Profile = Extract<
  ProfileQuery["profile"],
  { __typename?: "ProfileValue" }
>;

export type {Social};

export type NavigationItem = {
  label: string;
  to: string;
};
