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

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
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
  careerStartDate: Scalars['Date']['output'];
  contact: Contact;
  image: Image;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skills: Skills;
  social: Social;
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<ProfileResult>;
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
  ProfileResult:
    | ( ProfileError )
    | ( ProfileValue )
  ;
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Contact: ResolverTypeWrapper<Contact>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Image: ResolverTypeWrapper<Image>;
  ProfileError: ResolverTypeWrapper<ProfileError>;
  ProfileResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ProfileResult']>;
  ProfileValue: ResolverTypeWrapper<ProfileValue>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Skills: ResolverTypeWrapper<Skills>;
  Social: ResolverTypeWrapper<Social>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Contact: Contact;
  Date: Scalars['Date']['output'];
  Image: Image;
  ProfileError: ProfileError;
  ProfileResult: ResolversUnionTypes<ResolversParentTypes>['ProfileResult'];
  ProfileValue: ProfileValue;
  Query: Record<PropertyKey, never>;
  Skills: Skills;
  Social: Social;
  String: Scalars['String']['output'];
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

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
  careerStartDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<ResolversTypes['Skills'], ParentType, ContextType>;
  social?: Resolver<ResolversTypes['Social'], ParentType, ContextType>;
  tagline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  profile?: Resolver<Maybe<ResolversTypes['ProfileResult']>, ParentType, ContextType>;
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

export type Resolvers<ContextType = any> = {
  Contact?: ContactResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  ProfileError?: ProfileErrorResolvers<ContextType>;
  ProfileResult?: ProfileResultResolvers<ContextType>;
  ProfileValue?: ProfileValueResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skills?: SkillsResolvers<ContextType>;
  Social?: SocialResolvers<ContextType>;
};

