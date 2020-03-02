import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type PersonData = {
   __typename?: 'PersonData',
  first?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['String']>,
  gamerTag?: Maybe<Scalars['String']>,
  birthday?: Maybe<Scalars['Int']>,
};

export type Player = {
   __typename?: 'Player',
  data?: Maybe<PersonData>,
  stats?: Maybe<StatBlock>,
};

export type Query = {
   __typename?: 'Query',
  me: Array<PersonData>,
};

export type StatBlock = {
   __typename?: 'StatBlock',
  mental?: Maybe<Scalars['Int']>,
};

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me: Array<(
    { __typename?: 'PersonData' }
    & Pick<PersonData, 'first'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PersonData: ResolverTypeWrapper<PersonData>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  StatBlock: ResolverTypeWrapper<StatBlock>,
  Player: ResolverTypeWrapper<Player>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PersonData: PersonData,
  String: Scalars['String'],
  Int: Scalars['Int'],
  Boolean: Scalars['Boolean'],
  StatBlock: StatBlock,
  Player: Player,
};

export type PersonDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonData'] = ResolversParentTypes['PersonData']> = {
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gamerTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  birthday?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  data?: Resolver<Maybe<ResolversTypes['PersonData']>, ParentType, ContextType>,
  stats?: Resolver<Maybe<ResolversTypes['StatBlock']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Array<ResolversTypes['PersonData']>, ParentType, ContextType>,
};

export type StatBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatBlock'] = ResolversParentTypes['StatBlock']> = {
  mental?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  PersonData?: PersonDataResolvers<ContextType>,
  Player?: PlayerResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  StatBlock?: StatBlockResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const GetMeDocument = gql`
    query GetMe {
  me {
    first
  }
}
    `;
export type GetMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMeQuery, GetMeQueryVariables>, 'query'>;

    export const GetMeComponent = (props: GetMeComponentProps) => (
      <ApolloReactComponents.Query<GetMeQuery, GetMeQueryVariables> query={GetMeDocument} {...props} />
    );
    
export type GetMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetMeQuery, GetMeQueryVariables> & TChildProps;
export function withGetMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMeQuery,
  GetMeQueryVariables,
  GetMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetMeQuery, GetMeQueryVariables, GetMeProps<TChildProps>>(GetMeDocument, {
      alias: 'getMe',
      ...operationOptions
    });
};
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;