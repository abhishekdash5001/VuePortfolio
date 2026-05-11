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

export type Color = {
  __typename?: 'Color';
  hex: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  color: Color;
  companyName: Scalars['String']['output'];
  designation: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  startDate: Scalars['Date']['output'];
};

export type ExperienceError = {
  __typename?: 'ExperienceError';
  message: Scalars['String']['output'];
};

export type ExperienceResult = ExperienceError | ExperienceValue;

export type ExperienceValue = {
  __typename?: 'ExperienceValue';
  experience: Array<Experience>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProfileError = {
  __typename?: 'ProfileError';
  message: Scalars['String']['output'];
};

export type ProfileResult = ProfileError | ProfileValue;

export type ProfileValue = {
  __typename?: 'ProfileValue';
  bio: Scalars['String']['output'];
  careerStartDate: Scalars['Date']['output'];
  contact: Contact;
  image: Image;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  shortBio: Scalars['String']['output'];
  skills: Skills;
  social: Social;
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  experience?: Maybe<ExperienceResult>;
  profile?: Maybe<ProfileResult>;
  techStack?: Maybe<TechStackResult>;
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

export type TechStack = {
  __typename?: 'TechStack';
  name: Scalars['String']['output'];
  theme: Theme;
  url: Scalars['String']['output'];
};

export type TechStackError = {
  __typename?: 'TechStackError';
  message: Scalars['String']['output'];
};

export type TechStackResult = TechStackError | TechStackValue;

export type TechStackValue = {
  __typename?: 'TechStackValue';
  stacks: Array<TechStack>;
};

export enum Theme {
  All = 'all',
  Dark = 'dark',
  Light = 'light'
}

export type ExperienceAboutMeQueryVariables = Exact<{ [key: string]: never; }>;


export type ExperienceAboutMeQuery = { __typename?: 'Query', experience?:
    | { __typename?: 'ExperienceError', message: string }
    | { __typename?: 'ExperienceValue', experience: Array<{ __typename?: 'Experience', companyName: string, designation: string, endDate?: any | null, startDate: any, color: { __typename?: 'Color', hex: string } }> }
   | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?:
    | { __typename?: 'ProfileError', message: string }
    | { __typename?: 'ProfileValue', name: string, shortBio: string, bio: string, title: string, social: { __typename?: 'Social', github?: string | null, linkedin: string }, image: { __typename?: 'Image', alt: string, url: string } }
   | null };

export type TechStackQueryVariables = Exact<{ [key: string]: never; }>;


export type TechStackQuery = { __typename?: 'Query', techStack?:
    | { __typename?: 'TechStackError', message: string }
    | { __typename?: 'TechStackValue', stacks: Array<{ __typename?: 'TechStack', name: string, url: string, theme: Theme }> }
   | null };
