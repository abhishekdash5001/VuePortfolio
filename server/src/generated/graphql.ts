import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  ExperienceResult:
    | ( ExperienceError )
    | ( ExperienceValue )
  ;
  ProfileResult:
    | ( ProfileError )
    | ( ProfileValue )
  ;
  TechStackResult:
    | ( TechStackError )
    | ( TechStackValue )
  ;
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Color: ResolverTypeWrapper<Color>;
  Contact: ResolverTypeWrapper<Contact>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Experience: ResolverTypeWrapper<Experience>;
  ExperienceError: ResolverTypeWrapper<ExperienceError>;
  ExperienceResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ExperienceResult']>;
  ExperienceValue: ResolverTypeWrapper<ExperienceValue>;
  Image: ResolverTypeWrapper<Image>;
  ProfileError: ResolverTypeWrapper<ProfileError>;
  ProfileResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ProfileResult']>;
  ProfileValue: ResolverTypeWrapper<ProfileValue>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Skills: ResolverTypeWrapper<Skills>;
  Social: ResolverTypeWrapper<Social>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TechStack: ResolverTypeWrapper<TechStack>;
  TechStackError: ResolverTypeWrapper<TechStackError>;
  TechStackResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TechStackResult']>;
  TechStackValue: ResolverTypeWrapper<TechStackValue>;
  Theme: Theme;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Color: Color;
  Contact: Contact;
  Date: Scalars['Date']['output'];
  Experience: Experience;
  ExperienceError: ExperienceError;
  ExperienceResult: ResolversUnionTypes<ResolversParentTypes>['ExperienceResult'];
  ExperienceValue: ExperienceValue;
  Image: Image;
  ProfileError: ProfileError;
  ProfileResult: ResolversUnionTypes<ResolversParentTypes>['ProfileResult'];
  ProfileValue: ProfileValue;
  Query: Record<PropertyKey, never>;
  Skills: Skills;
  Social: Social;
  String: Scalars['String']['output'];
  TechStack: TechStack;
  TechStackError: TechStackError;
  TechStackResult: ResolversUnionTypes<ResolversParentTypes>['TechStackResult'];
  TechStackValue: TechStackValue;
};

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = {
  hex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  color?: Resolver<ResolversTypes['Color'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  designation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
};

export type ExperienceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceError'] = ResolversParentTypes['ExperienceError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceResult'] = ResolversParentTypes['ExperienceResult']> = {
  __resolveType: TypeResolveFn<'ExperienceError' | 'ExperienceValue', ParentType, ContextType>;
};

export type ExperienceValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceValue'] = ResolversParentTypes['ExperienceValue']> = {
  experience?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ProfileErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileError'] = ResolversParentTypes['ProfileError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileResult'] = ResolversParentTypes['ProfileResult']> = {
  __resolveType: TypeResolveFn<'ProfileError' | 'ProfileValue', ParentType, ContextType>;
};

export type ProfileValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileValue'] = ResolversParentTypes['ProfileValue']> = {
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  careerStartDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortBio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<ResolversTypes['Skills'], ParentType, ContextType>;
  social?: Resolver<ResolversTypes['Social'], ParentType, ContextType>;
  tagline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  experience?: Resolver<Maybe<ResolversTypes['ExperienceResult']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['ProfileResult']>, ParentType, ContextType>;
  techStack?: Resolver<Maybe<ResolversTypes['TechStackResult']>, ParentType, ContextType>;
};

export type SkillsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skills'] = ResolversParentTypes['Skills']> = {
  backend?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  database?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  devops?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  frontend?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SocialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Social'] = ResolversParentTypes['Social']> = {
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leetcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkedin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type TechStackResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechStack'] = ResolversParentTypes['TechStack']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['Theme'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TechStackErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechStackError'] = ResolversParentTypes['TechStackError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TechStackResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechStackResult'] = ResolversParentTypes['TechStackResult']> = {
  __resolveType: TypeResolveFn<'TechStackError' | 'TechStackValue', ParentType, ContextType>;
};

export type TechStackValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['TechStackValue'] = ResolversParentTypes['TechStackValue']> = {
  stacks?: Resolver<Array<ResolversTypes['TechStack']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Color?: ColorResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Experience?: ExperienceResolvers<ContextType>;
  ExperienceError?: ExperienceErrorResolvers<ContextType>;
  ExperienceResult?: ExperienceResultResolvers<ContextType>;
  ExperienceValue?: ExperienceValueResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  ProfileError?: ProfileErrorResolvers<ContextType>;
  ProfileResult?: ProfileResultResolvers<ContextType>;
  ProfileValue?: ProfileValueResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skills?: SkillsResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
  TechStack?: TechStackResolvers<ContextType>;
  TechStackError?: TechStackErrorResolvers<ContextType>;
  TechStackResult?: TechStackResultResolvers<ContextType>;
  TechStackValue?: TechStackValueResolvers<ContextType>;
};

