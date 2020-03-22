import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Coach = {
   __typename?: 'Coach',
  id: Scalars['Int'],
  profile: Profile,
  leadership: Scalars['Float'],
};

export enum InGameStrategy {
  None = 'NONE'
}

export type Instruction = {
   __typename?: 'Instruction',
  id: Scalars['Int'],
  /** 
 * Players
   * Instructions are actually enums.
 */
  topPlayer: Player,
  topInstruction: TopInstruction,
  junglePlayer: Player,
  jungleInstruction: JungleInstruction,
  midPlayer: Player,
  midInstruction: MidInstruction,
  marksmanPlayer: Player,
  marksmanInstruction: MarksmanInstruction,
  supportPlayer: Player,
  supportInstruction: SupportInstruction,
  /** Overall */
  pickBanStrategy: PickBanStrategy,
  inGameStrategy: InGameStrategy,
};

export enum JungleInstruction {
  None = 'NONE',
  Push = 'PUSH'
}

export type League = {
   __typename?: 'League',
  id: Scalars['Int'],
  name: Scalars['String'],
  division: Scalars['Int'],
};

export type Manager = {
   __typename?: 'Manager',
  id: Scalars['Int'],
  profile?: Maybe<Profile>,
};

export enum MarksmanInstruction {
  None = 'NONE',
  Push = 'PUSH'
}

/** Matches */
export type Match = {
   __typename?: 'Match',
  id: Scalars['Int'],
  league?: Maybe<League>,
  home: Team,
  homeInstruction: Instruction,
  away: Team,
  awayInstruction: Instruction,
};

export enum MidInstruction {
  None = 'NONE',
  Push = 'PUSH'
}

export enum PickBanStrategy {
  None = 'NONE'
}

export type Player = {
   __typename?: 'Player',
  id: Scalars['Int'],
  profile: Profile,
  team: Team,
  vision: Scalars['Float'],
  championPool: Scalars['Float'],
  lastHit: Scalars['Float'],
  wage: Scalars['Int'],
};

/** Person */
export type Profile = {
   __typename?: 'Profile',
  id: Scalars['Int'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  gamerTag: Scalars['String'],
  birthday: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  user: User,
  signUp: User,
  logIn: Scalars['String'],
};


export type QuerySignUpArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type QueryLogInArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};

export enum SupportInstruction {
  None = 'NONE',
  Push = 'PUSH'
}

export type Team = {
   __typename?: 'Team',
  id: Scalars['Int'],
  user: User,
  coach: Coach,
  league: League,
  manager: Manager,
  name: Scalars['String'],
  fans: Scalars['Int'],
  money: Scalars['Int'],
};

export enum TopInstruction {
  None = 'NONE',
  Push = 'PUSH'
}

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  username: Scalars['String'],
  password: Scalars['String'],
};




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
  User: ResolverTypeWrapper<User>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Team: ResolverTypeWrapper<Team>,
  Coach: ResolverTypeWrapper<Coach>,
  Profile: ResolverTypeWrapper<Profile>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  League: ResolverTypeWrapper<League>,
  Manager: ResolverTypeWrapper<Manager>,
  Player: ResolverTypeWrapper<Player>,
  Match: ResolverTypeWrapper<Match>,
  Instruction: ResolverTypeWrapper<Instruction>,
  TopInstruction: TopInstruction,
  JungleInstruction: JungleInstruction,
  MidInstruction: MidInstruction,
  MarksmanInstruction: MarksmanInstruction,
  SupportInstruction: SupportInstruction,
  PickBanStrategy: PickBanStrategy,
  InGameStrategy: InGameStrategy,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Team: Team,
  Coach: Coach,
  Profile: Profile,
  Float: Scalars['Float'],
  League: League,
  Manager: Manager,
  Player: Player,
  Match: Match,
  Instruction: Instruction,
  TopInstruction: TopInstruction,
  JungleInstruction: JungleInstruction,
  MidInstruction: MidInstruction,
  MarksmanInstruction: MarksmanInstruction,
  SupportInstruction: SupportInstruction,
  PickBanStrategy: PickBanStrategy,
  InGameStrategy: InGameStrategy,
};

export type CoachResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coach'] = ResolversParentTypes['Coach']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  leadership?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type InstructionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Instruction'] = ResolversParentTypes['Instruction']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  topPlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType>,
  topInstruction?: Resolver<ResolversTypes['TopInstruction'], ParentType, ContextType>,
  junglePlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType>,
  jungleInstruction?: Resolver<ResolversTypes['JungleInstruction'], ParentType, ContextType>,
  midPlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType>,
  midInstruction?: Resolver<ResolversTypes['MidInstruction'], ParentType, ContextType>,
  marksmanPlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType>,
  marksmanInstruction?: Resolver<ResolversTypes['MarksmanInstruction'], ParentType, ContextType>,
  supportPlayer?: Resolver<ResolversTypes['Player'], ParentType, ContextType>,
  supportInstruction?: Resolver<ResolversTypes['SupportInstruction'], ParentType, ContextType>,
  pickBanStrategy?: Resolver<ResolversTypes['PickBanStrategy'], ParentType, ContextType>,
  inGameStrategy?: Resolver<ResolversTypes['InGameStrategy'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['League'] = ResolversParentTypes['League']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  division?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  league?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType>,
  home?: Resolver<ResolversTypes['Team'], ParentType, ContextType>,
  homeInstruction?: Resolver<ResolversTypes['Instruction'], ParentType, ContextType>,
  away?: Resolver<ResolversTypes['Team'], ParentType, ContextType>,
  awayInstruction?: Resolver<ResolversTypes['Instruction'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>,
  vision?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  championPool?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  lastHit?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  wage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  gamerTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  birthday?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  signUp?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuerySignUpArgs, 'username' | 'password'>>,
  logIn?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryLogInArgs, 'username' | 'password'>>,
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  coach?: Resolver<ResolversTypes['Coach'], ParentType, ContextType>,
  league?: Resolver<ResolversTypes['League'], ParentType, ContextType>,
  manager?: Resolver<ResolversTypes['Manager'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  money?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Coach?: CoachResolvers<ContextType>,
  Instruction?: InstructionResolvers<ContextType>,
  League?: LeagueResolvers<ContextType>,
  Manager?: ManagerResolvers<ContextType>,
  Match?: MatchResolvers<ContextType>,
  Player?: PlayerResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Team?: TeamResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

