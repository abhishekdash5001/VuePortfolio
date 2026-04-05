export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  careerStartDate: Scalars['Date']['output'];
  contact: Contact;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skills: Skills;
  social: Social;
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  profile: Profile;
};

export type Skills = {
  __typename?: 'Skills';
  backend: Array<Scalars['String']['output']>;
  database: Array<Scalars['String']['output']>;
  devops: Array<Scalars['String']['output']>;
  frontend: Array<Scalars['String']['output']>;
};

export type Social = {
  __typename?: 'Social';
  github?: Maybe<Scalars['String']['output']>;
  leetcode?: Maybe<Scalars['String']['output']>;
  linkedin: Scalars['String']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', name: string, careerStartDate: any, location: string, title: string } };
