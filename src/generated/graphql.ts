import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
  /** Represents empty values */
  Void: { input: any; output: any; }
};

export type AccessibleUserList = {
  __typename?: 'AccessibleUserList';
  _links?: Maybe<Scalars['JSON']['output']>;
  /** The number of items in the page. */
  count: Scalars['Int']['output'];
  /** The page of items. */
  items: Array<Maybe<User>>;
  /** The pagination limit. */
  limit: Scalars['Int']['output'];
  /** The pagination starting offset. */
  offset: Scalars['Int']['output'];
};

export type DeactivateUser_Input = {
  deactivatedReason: Scalars['String']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  updatedBy: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['Int']['output'];
  context?: Maybe<ErrorContext>;
  message: Scalars['String']['output'];
  retryable: Scalars['Boolean']['output'];
};

export type ErrorContext = {
  __typename?: 'ErrorContext';
  errors: Array<Maybe<SubError>>;
};

export type Flags = {
  __typename?: 'Flags';
  flags?: Maybe<Array<Maybe<Mutation_Update_For_Flags_OneOf_0_Flags_Items>>>;
};

export type Flags_Input = {
  flags?: InputMaybe<Array<InputMaybe<Mutation_Update_For_Flags_OneOf_0_Flags_Items>>>;
};

export enum HttpMethod {
  Connect = 'CONNECT',
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Trace = 'TRACE'
}

export type Json_Container = {
  __typename?: 'JSON_container';
  JSON?: Maybe<Scalars['JSON']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new user_project_role_event_batch */
  create?: Maybe<Create_Response>;
  /** Create a new republishes relative to a user_project_role_event */
  create_for_republishes?: Maybe<Create_For_Republishes_Response>;
  /** Delete a user_preferences by id */
  delete?: Maybe<Delete_Response>;
  /** Create or update a user_preferences by id */
  replace?: Maybe<Replace_Response>;
  /** Update some or all of a user_preferences by id */
  update?: Maybe<Update_Response>;
  /** Replace a company_relations relative to a user */
  update_for_company_relations?: Maybe<Update_For_Company_Relations_Response>;
  /** Replace a deactivates relative to a user */
  update_for_deactivates?: Maybe<Update_For_Deactivates_Response>;
  /** Replace a emails relative to a user */
  update_for_emails?: Maybe<Update_For_Emails_Response>;
  /** Replace a flags relative to a user_preferences */
  update_for_flags?: Maybe<Update_For_Flags_Response>;
  /** Replace a names relative to a user */
  update_for_names?: Maybe<Update_For_Names_Response>;
  /** Replace a reset_ssos relative to a user */
  update_for_reset_ssos?: Maybe<Update_For_Reset_Ssos_Response>;
  /** Replace a thumbnail_urls relative to a user */
  update_for_thumbnail_urls?: Maybe<Update_For_Thumbnail_Urls_Response>;
};


export type MutationCreateArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<NewUserProjectRoleEventBatch_Input>;
};


export type MutationCreate_For_RepublishesArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  user_project_role_event_id: Scalars['UUID']['input'];
};


export type MutationDeleteArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  client_relationship_lead_id: Scalars['UUID']['input'];
  pending_provider_invite_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
  terms_of_service_acceptance_id: Scalars['UUID']['input'];
  user_favorite_project_id: Scalars['UUID']['input'];
  user_preferences_id: Scalars['UUID']['input'];
};


export type MutationReplaceArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<ReplaceUserPreferences_Input>;
  person_id: Scalars['UUID']['input'];
  user_favorite_project_id: Scalars['UUID']['input'];
  user_preferences_id: Scalars['UUID']['input'];
};


export type MutationUpdateArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  client_relationship_lead_id: Scalars['UUID']['input'];
  input?: InputMaybe<UpdateUserPreferences_Input>;
  person_id: Scalars['UUID']['input'];
  user_preferences_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_Company_RelationsArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<UpdateCompanyRelation_Input>;
  user_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_DeactivatesArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<DeactivateUser_Input>;
  user_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_EmailsArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<UpdateUserEmail_Input>;
  user_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_FlagsArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Flags_Input>;
  user_preferences_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_NamesArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<UpdateUserName_Input>;
  user_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_Reset_SsosArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<UpdateUserField_Input>;
  user_id: Scalars['UUID']['input'];
};


export type MutationUpdate_For_Thumbnail_UrlsArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<UpdateUserThumbnailUrl_Input>;
  user_id: Scalars['UUID']['input'];
};

export type NewUserProjectRoleEventBatch_Input = {
  items: Array<InputMaybe<NewUserProjectRoleEvent_Input>>;
};

/** Generalized user project role set event schema. */
export type NewUserProjectRoleEvent_Input = {
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  createdBy: Scalars['UUID']['input'];
  eventType: MutationInput_Create_Input_Items_Items_EventType;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  purpose?: InputMaybe<MutationInput_Create_Input_Items_Items_Purpose>;
  resolution?: InputMaybe<MutationInput_Create_Input_Items_Items_Resolution>;
  role?: InputMaybe<MutationInput_Create_Input_Items_Items_Role>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userProjectRoleId?: InputMaybe<Scalars['UUID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a user_project_role_event by id */
  retrieve?: Maybe<Retrieve_Response>;
  /** Search the collection of all user_project_role_events */
  search?: Maybe<Search_Response>;
  /** Search for accessible_users relative to a user */
  search_for_accessible_users?: Maybe<Search_For_Accessible_Users_Response>;
};


export type QueryRetrieveArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  account_manager_id: Scalars['UUID']['input'];
  client_relationship_lead_id: Scalars['UUID']['input'];
  min_clock?: InputMaybe<Scalars['Int']['input']>;
  pending_provider_invite_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
  terms_of_service_acceptance_id: Scalars['UUID']['input'];
  user_event_id: Scalars['UUID']['input'];
  user_favorite_project_id: Scalars['UUID']['input'];
  user_id: Scalars['UUID']['input'];
  user_info_event_id: Scalars['UUID']['input'];
  user_info_id: Scalars['UUID']['input'];
  user_preferences_id: Scalars['UUID']['input'];
  user_project_role_event_id: Scalars['UUID']['input'];
  user_project_role_id: Scalars['UUID']['input'];
};


export type QuerySearchArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  activation_progress?: InputMaybe<QueryInput_Search_Activation_Progress>;
  client_id?: InputMaybe<Scalars['UUID']['input']>;
  clock?: InputMaybe<Scalars['Int']['input']>;
  company_id?: InputMaybe<Scalars['UUID']['input']>;
  company_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  company_role?: InputMaybe<QueryInput_Search_Company_Role>;
  company_roles?: InputMaybe<Array<InputMaybe<QueryInput_Search_Company_Roles_Items>>>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  distinct_user_id?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  email_string?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  event_type?: InputMaybe<QueryInput_Search_Event_Type>;
  event_types?: InputMaybe<Array<InputMaybe<QueryInput_Search_Event_Types_Items>>>;
  exclude_company_roles?: InputMaybe<Array<InputMaybe<QueryInput_Search_Exclude_Company_Roles_Items>>>;
  exclude_unset_roles?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  has_client_company_relation?: InputMaybe<Scalars['Boolean']['input']>;
  has_provider_company_relation?: InputMaybe<Scalars['Boolean']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  ignore_resolution?: InputMaybe<Scalars['Boolean']['input']>;
  include_deactivated?: InputMaybe<Scalars['Boolean']['input']>;
  inviter_id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  latest?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  max_clock?: InputMaybe<Scalars['Int']['input']>;
  max_updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  min_clock?: InputMaybe<Scalars['Int']['input']>;
  min_created_timestamp?: InputMaybe<Scalars['Float']['input']>;
  min_updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  most_recent?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  project_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  purpose?: InputMaybe<QueryInput_Search_Purpose>;
  q?: InputMaybe<Scalars['String']['input']>;
  resolution?: InputMaybe<QueryInput_Search_Resolution>;
  role?: InputMaybe<QueryInput_Search_Role>;
  roles?: InputMaybe<Array<InputMaybe<QueryInput_Search_Roles_Items>>>;
  salesforce_id?: InputMaybe<Scalars['String']['input']>;
  salesforce_id_is_set?: InputMaybe<Scalars['Boolean']['input']>;
  service_provider_id?: InputMaybe<Scalars['UUID']['input']>;
  service_provider_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  source_type?: InputMaybe<QueryInput_Search_Source_Type>;
  source_types?: InputMaybe<Array<InputMaybe<QueryInput_Search_Source_Types_Items>>>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
  user_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  user_info_id?: InputMaybe<Scalars['UUID']['input']>;
  user_project_role_id?: InputMaybe<Scalars['UUID']['input']>;
  user_set_localisation?: InputMaybe<Scalars['Boolean']['input']>;
  user_type?: InputMaybe<QueryInput_Search_User_Type>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearch_For_Accessible_UsersArgs = {
  X_Response_Skip_Null?: InputMaybe<Scalars['String']['input']>;
  accessible_user_id?: InputMaybe<Scalars['UUID']['input']>;
  accessible_user_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  activation_progress?: InputMaybe<QueryInput_Search_For_Accessible_Users_Activation_Progress>;
  company_id?: InputMaybe<Scalars['UUID']['input']>;
  company_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  company_role?: InputMaybe<QueryInput_Search_For_Accessible_Users_Company_Role>;
  company_roles?: InputMaybe<Array<InputMaybe<QueryInput_Search_For_Accessible_Users_Company_Roles_Items>>>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  email_string?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  exclude_company_roles?: InputMaybe<Array<InputMaybe<QueryInput_Search_For_Accessible_Users_Exclude_Company_Roles_Items>>>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  has_client_company_relation?: InputMaybe<Scalars['Boolean']['input']>;
  has_provider_company_relation?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  include_deactivated?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  max_updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  min_updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  purpose?: InputMaybe<QueryInput_Search_For_Accessible_Users_Purpose>;
  q?: InputMaybe<Scalars['String']['input']>;
  salesforce_id?: InputMaybe<Scalars['String']['input']>;
  salesforce_id_is_set?: InputMaybe<Scalars['Boolean']['input']>;
  user_id: Scalars['UUID']['input'];
  user_type?: InputMaybe<QueryInput_Search_For_Accessible_Users_User_Type>;
};

export type ReplaceUserPreferences_Input = {
  clock?: InputMaybe<Scalars['Int']['input']>;
  emailDigestsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  flags?: InputMaybe<Array<InputMaybe<MutationInput_Replace_Input_Flags_Items>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['UUID']['input'];
  userSetLocalisation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubError = {
  __typename?: 'SubError';
  message: Scalars['String']['output'];
};

export type UpdateCompanyRelationResponse = {
  __typename?: 'UpdateCompanyRelationResponse';
  updated: Scalars['Int']['output'];
};

export type UpdateCompanyRelation_Input = {
  hasClientCompanyRelation: Scalars['Boolean']['input'];
  hasProviderCompanyRelation: Scalars['Boolean']['input'];
};

export type UpdateUserEmail_Input = {
  email: Scalars['EmailAddress']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  updatedBy: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateUserField_Input = {
  source?: InputMaybe<Scalars['String']['input']>;
  updatedBy: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateUserName_Input = {
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  updatedBy: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateUserPreferences_Input = {
  clock?: InputMaybe<Scalars['Int']['input']>;
  emailDigestsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  flags?: InputMaybe<Array<InputMaybe<MutationInput_Update_Input_Flags_Items>>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserThumbnailUrl_Input = {
  source?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  updatedBy: Scalars['UUID']['input'];
  userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type User = {
  __typename?: 'User';
  _links?: Maybe<Scalars['JSON']['output']>;
  activationProgress?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['UUID']['output']>;
  companyId: Scalars['UUID']['output'];
  companyRole?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['UUID']['output']>;
  deactivated?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  invitationCompanyRole?: Maybe<Scalars['String']['output']>;
  invitationLink?: Maybe<Scalars['String']['output']>;
  invitationLinkType?: Maybe<Scalars['String']['output']>;
  invitationMessage?: Maybe<Scalars['String']['output']>;
  invitationSource?: Maybe<Scalars['String']['output']>;
  invitedAt?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isCommonEmailDomain?: Maybe<Scalars['Boolean']['output']>;
  isDeactivated?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  purpose: Scalars['String']['output'];
  reinvited?: Maybe<Scalars['Boolean']['output']>;
  salesforceId?: Maybe<Scalars['String']['output']>;
  termsSignedAt?: Maybe<Scalars['DateTime']['output']>;
  termsVersionSigned?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  userType: Scalars['String']['output'];
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  _links?: Maybe<Scalars['JSON']['output']>;
  clock?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  emailDigestsEnabled?: Maybe<Scalars['Boolean']['output']>;
  emailEnabled?: Maybe<Scalars['Boolean']['output']>;
  flags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['UUID']['output'];
  userSetLocalisation?: Maybe<Scalars['Boolean']['output']>;
};

export type UserProjectRoleEvent = {
  __typename?: 'UserProjectRoleEvent';
  _links?: Maybe<Scalars['JSON']['output']>;
  _state?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clock?: Maybe<Scalars['Int']['output']>;
  companyId?: Maybe<Scalars['UUID']['output']>;
  createdBy?: Maybe<Scalars['UUID']['output']>;
  createdTimestamp: Scalars['Float']['output'];
  eventType: Scalars['String']['output'];
  handlePermissions?: Maybe<Scalars['Boolean']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['UUID']['output'];
  parentId?: Maybe<Scalars['UUID']['output']>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
  userProjectRoleId: Scalars['UUID']['output'];
};

export type UserProjectRoleEventBatch = {
  __typename?: 'UserProjectRoleEventBatch';
  items: Array<Maybe<UserProjectRoleEvent>>;
};

export type UserProjectRoleEventList = {
  __typename?: 'UserProjectRoleEventList';
  _links?: Maybe<Scalars['JSON']['output']>;
  /** The number of items in the page. */
  count: Scalars['Int']['output'];
  /** The page of items. */
  items: Array<Maybe<UserProjectRoleEvent>>;
  /** The pagination limit. */
  limit: Scalars['Int']['output'];
  /** The pagination starting offset. */
  offset: Scalars['Int']['output'];
};

export type Void_Container = {
  __typename?: 'Void_container';
  Void?: Maybe<Scalars['Void']['output']>;
};

export type Create_For_Republishes_Response = Error | Json_Container;

export type Create_Response = Error | UserProjectRoleEventBatch;

export type Delete_Response = Error | Void_Container;

export enum MutationInput_Create_Input_Items_Items_EventType {
  SetUserProjectRole = 'SetUserProjectRole',
  SetUserProjectRolePurpose = 'SetUserProjectRolePurpose',
  SetUserProjectRoleResolution = 'SetUserProjectRoleResolution',
  UnsetUserProjectRole = 'UnsetUserProjectRole',
  UserAddedToProject = 'UserAddedToProject'
}

export enum MutationInput_Create_Input_Items_Items_Purpose {
  Content = 'CONTENT',
  Normal = 'NORMAL',
  Rehearsal = 'REHEARSAL',
  Test = 'TEST',
  Tutorial = 'TUTORIAL'
}

export enum MutationInput_Create_Input_Items_Items_Resolution {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Closed = 'CLOSED',
  Redacted = 'REDACTED',
  Stale = 'STALE'
}

export enum MutationInput_Create_Input_Items_Items_Role {
  OnboardingEditor = 'OnboardingEditor',
  OnboardingTeamMember = 'OnboardingTeamMember',
  ProgramClientManager = 'ProgramClientManager',
  ProgramProviderManager = 'ProgramProviderManager',
  ProjectAdmin = 'ProjectAdmin',
  ProjectEditor = 'ProjectEditor',
  ProjectEvaluator = 'ProjectEvaluator',
  ProjectHomeUser = 'ProjectHomeUser',
  ProjectManager = 'ProjectManager',
  ProjectOwner = 'ProjectOwner',
  ProjectProcurement = 'ProjectProcurement',
  ProjectViewer = 'ProjectViewer',
  ProviderProjectManager = 'ProviderProjectManager'
}

export enum MutationInput_Replace_Input_Flags_Items {
  DisableNewProjectBriefOverviewModal = 'DISABLE_NEW_PROJECT_BRIEF_OVERVIEW_MODAL',
  DisableShowBriefTip = 'DISABLE_SHOW_BRIEF_TIP'
}

export enum MutationInput_Update_Input_Flags_Items {
  DisableNewProjectBriefOverviewModal = 'DISABLE_NEW_PROJECT_BRIEF_OVERVIEW_MODAL',
  DisableShowBriefTip = 'DISABLE_SHOW_BRIEF_TIP'
}

export enum Mutation_Update_For_Flags_OneOf_0_Flags_Items {
  DisableNewProjectBriefOverviewModal = 'DISABLE_NEW_PROJECT_BRIEF_OVERVIEW_MODAL',
  DisableShowBriefTip = 'DISABLE_SHOW_BRIEF_TIP'
}

export enum QueryInput_Search_Activation_Progress {
  EmailChanged = 'EmailChanged',
  NameChanged = 'NameChanged',
  ThumbnailUrlChanged = 'ThumbnailUrlChanged',
  UserActivated = 'UserActivated',
  UserCategorySet = 'UserCategorySet',
  UserCategoryUnset = 'UserCategoryUnset',
  UserCompanyRoleSet = 'UserCompanyRoleSet',
  UserCreated = 'UserCreated',
  UserDeactivated = 'UserDeactivated',
  UserDescriptionSet = 'UserDescriptionSet',
  UserGoLive = 'UserGoLive',
  UserInvited = 'UserInvited',
  UserPasswordSet = 'UserPasswordSet',
  UserPurposeSet = 'UserPurposeSet',
  UserResetSso = 'UserResetSSO',
  UserSalesforceIdSet = 'UserSalesforceIDSet',
  UserTermsSignedSet = 'UserTermsSignedSet',
  UserTermsSignedUnset = 'UserTermsSignedUnset'
}

export enum QueryInput_Search_Company_Role {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_Company_Roles_Items {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_Event_Type {
  SetUserProjectRole = 'SetUserProjectRole',
  SetUserProjectRolePurpose = 'SetUserProjectRolePurpose',
  SetUserProjectRoleResolution = 'SetUserProjectRoleResolution',
  UnsetUserProjectRole = 'UnsetUserProjectRole',
  UserAddedToProject = 'UserAddedToProject'
}

export enum QueryInput_Search_Event_Types_Items {
  SetUserProjectRole = 'SetUserProjectRole',
  SetUserProjectRolePurpose = 'SetUserProjectRolePurpose',
  SetUserProjectRoleResolution = 'SetUserProjectRoleResolution',
  UnsetUserProjectRole = 'UnsetUserProjectRole',
  UserAddedToProject = 'UserAddedToProject'
}

export enum QueryInput_Search_Exclude_Company_Roles_Items {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_For_Accessible_Users_Activation_Progress {
  EmailChanged = 'EmailChanged',
  NameChanged = 'NameChanged',
  ThumbnailUrlChanged = 'ThumbnailUrlChanged',
  UserActivated = 'UserActivated',
  UserCategorySet = 'UserCategorySet',
  UserCategoryUnset = 'UserCategoryUnset',
  UserCompanyRoleSet = 'UserCompanyRoleSet',
  UserCreated = 'UserCreated',
  UserDeactivated = 'UserDeactivated',
  UserDescriptionSet = 'UserDescriptionSet',
  UserGoLive = 'UserGoLive',
  UserInvited = 'UserInvited',
  UserPasswordSet = 'UserPasswordSet',
  UserPurposeSet = 'UserPurposeSet',
  UserResetSso = 'UserResetSSO',
  UserSalesforceIdSet = 'UserSalesforceIDSet',
  UserTermsSignedSet = 'UserTermsSignedSet',
  UserTermsSignedUnset = 'UserTermsSignedUnset'
}

export enum QueryInput_Search_For_Accessible_Users_Company_Role {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_For_Accessible_Users_Company_Roles_Items {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_For_Accessible_Users_Exclude_Company_Roles_Items {
  BusinessDirector = 'BusinessDirector',
  BusinessUser = 'BusinessUser',
  CategoryManager = 'CategoryManager',
  Developer = 'Developer',
  ProcurementUser = 'ProcurementUser',
  ProviderSmartProfileEditor = 'ProviderSmartProfileEditor',
  ProviderSystemAdmin = 'ProviderSystemAdmin',
  ProviderTeamMember = 'ProviderTeamMember',
  SuperAdmin = 'SuperAdmin',
  SystemAdmin = 'SystemAdmin',
  TeamMember = 'TeamMember',
  AccountManager = 'account_manager',
  Admin = 'admin',
  Manager = 'manager'
}

export enum QueryInput_Search_For_Accessible_Users_Purpose {
  Content = 'CONTENT',
  Normal = 'NORMAL',
  Rehearsal = 'REHEARSAL',
  Test = 'TEST',
  Tutorial = 'TUTORIAL'
}

export enum QueryInput_Search_For_Accessible_Users_User_Type {
  AccountManager = 'account_manager',
  BackendAdmin = 'backend_admin',
  BackendFileResolver = 'backend_file_resolver',
  GlobalityObserver = 'globality_observer',
  QeApiUser = 'qe_api_user',
  User = 'user'
}

export enum QueryInput_Search_Purpose {
  Content = 'CONTENT',
  Normal = 'NORMAL',
  Rehearsal = 'REHEARSAL',
  Test = 'TEST',
  Tutorial = 'TUTORIAL'
}

export enum QueryInput_Search_Resolution {
  Abandoned = 'ABANDONED',
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Closed = 'CLOSED',
  Redacted = 'REDACTED',
  Stale = 'STALE'
}

export enum QueryInput_Search_Role {
  OnboardingEditor = 'OnboardingEditor',
  OnboardingTeamMember = 'OnboardingTeamMember',
  ProgramClientManager = 'ProgramClientManager',
  ProgramProviderManager = 'ProgramProviderManager',
  ProjectAdmin = 'ProjectAdmin',
  ProjectEditor = 'ProjectEditor',
  ProjectEvaluator = 'ProjectEvaluator',
  ProjectHomeUser = 'ProjectHomeUser',
  ProjectManager = 'ProjectManager',
  ProjectOwner = 'ProjectOwner',
  ProjectProcurement = 'ProjectProcurement',
  ProjectViewer = 'ProjectViewer',
  ProviderProjectManager = 'ProviderProjectManager'
}

export enum QueryInput_Search_Roles_Items {
  OnboardingEditor = 'OnboardingEditor',
  OnboardingTeamMember = 'OnboardingTeamMember',
  ProgramClientManager = 'ProgramClientManager',
  ProgramProviderManager = 'ProgramProviderManager',
  ProjectAdmin = 'ProjectAdmin',
  ProjectEditor = 'ProjectEditor',
  ProjectEvaluator = 'ProjectEvaluator',
  ProjectHomeUser = 'ProjectHomeUser',
  ProjectManager = 'ProjectManager',
  ProjectOwner = 'ProjectOwner',
  ProjectProcurement = 'ProjectProcurement',
  ProjectViewer = 'ProjectViewer',
  ProviderProjectManager = 'ProviderProjectManager'
}

export enum QueryInput_Search_Source_Type {
  AdminTool = 'AdminTool',
  Auth0 = 'Auth0',
  CsTool = 'CSTool',
  Company = 'Company',
  DeveloperApi = 'DeveloperAPI',
  Globality = 'Globality',
  Project = 'Project',
  QnA = 'QnA',
  Salesforce = 'Salesforce',
  Unknown = 'Unknown',
  Workspace = 'Workspace'
}

export enum QueryInput_Search_Source_Types_Items {
  AdminTool = 'AdminTool',
  Auth0 = 'Auth0',
  CsTool = 'CSTool',
  Company = 'Company',
  DeveloperApi = 'DeveloperAPI',
  Globality = 'Globality',
  Project = 'Project',
  QnA = 'QnA',
  Salesforce = 'Salesforce',
  Unknown = 'Unknown',
  Workspace = 'Workspace'
}

export enum QueryInput_Search_User_Type {
  AccountManager = 'account_manager',
  BackendAdmin = 'backend_admin',
  BackendFileResolver = 'backend_file_resolver',
  GlobalityObserver = 'globality_observer',
  QeApiUser = 'qe_api_user',
  User = 'user'
}

export type Replace_Response = Error | UserPreferences;

export type Retrieve_Response = Error | UserProjectRoleEvent;

export type Search_For_Accessible_Users_Response = AccessibleUserList | Error;

export type Search_Response = Error | UserProjectRoleEventList;

export type Update_For_Company_Relations_Response = Error | UpdateCompanyRelationResponse;

export type Update_For_Deactivates_Response = Error | User;

export type Update_For_Emails_Response = Error | User;

export type Update_For_Flags_Response = Error | Flags;

export type Update_For_Names_Response = Error | User;

export type Update_For_Reset_Ssos_Response = Error | User;

export type Update_For_Thumbnail_Urls_Response = Error | User;

export type Update_Response = Error | UserPreferences;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  create_for_republishes_response: ( Error ) | ( Json_Container );
  create_response: ( Error ) | ( UserProjectRoleEventBatch );
  delete_response: ( Error ) | ( Void_Container );
  replace_response: ( Error ) | ( UserPreferences );
  retrieve_response: ( Error ) | ( UserProjectRoleEvent );
  search_for_accessible_users_response: ( AccessibleUserList ) | ( Error );
  search_response: ( Error ) | ( UserProjectRoleEventList );
  update_for_company_relations_response: ( Error ) | ( UpdateCompanyRelationResponse );
  update_for_deactivates_response: ( Error ) | ( User );
  update_for_emails_response: ( Error ) | ( User );
  update_for_flags_response: ( Error ) | ( Flags );
  update_for_names_response: ( Error ) | ( User );
  update_for_reset_ssos_response: ( Error ) | ( User );
  update_for_thumbnail_urls_response: ( Error ) | ( User );
  update_response: ( Error ) | ( UserPreferences );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AccessibleUserList: ResolverTypeWrapper<AccessibleUserList>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeactivateUser_Input: DeactivateUser_Input;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Error: ResolverTypeWrapper<Error>;
  ErrorContext: ResolverTypeWrapper<ErrorContext>;
  Flags: ResolverTypeWrapper<Flags>;
  Flags_Input: Flags_Input;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HTTPMethod: HttpMethod;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSON_container: ResolverTypeWrapper<Json_Container>;
  Mutation: ResolverTypeWrapper<{}>;
  NewUserProjectRoleEventBatch_Input: NewUserProjectRoleEventBatch_Input;
  NewUserProjectRoleEvent_Input: NewUserProjectRoleEvent_Input;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ReplaceUserPreferences_Input: ReplaceUserPreferences_Input;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubError: ResolverTypeWrapper<SubError>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UpdateCompanyRelationResponse: ResolverTypeWrapper<UpdateCompanyRelationResponse>;
  UpdateCompanyRelation_Input: UpdateCompanyRelation_Input;
  UpdateUserEmail_Input: UpdateUserEmail_Input;
  UpdateUserField_Input: UpdateUserField_Input;
  UpdateUserName_Input: UpdateUserName_Input;
  UpdateUserPreferences_Input: UpdateUserPreferences_Input;
  UpdateUserThumbnailUrl_Input: UpdateUserThumbnailUrl_Input;
  User: ResolverTypeWrapper<User>;
  UserPreferences: ResolverTypeWrapper<UserPreferences>;
  UserProjectRoleEvent: ResolverTypeWrapper<UserProjectRoleEvent>;
  UserProjectRoleEventBatch: ResolverTypeWrapper<UserProjectRoleEventBatch>;
  UserProjectRoleEventList: ResolverTypeWrapper<UserProjectRoleEventList>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
  Void_container: ResolverTypeWrapper<Void_Container>;
  create_for_republishes_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['create_for_republishes_response']>;
  create_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['create_response']>;
  delete_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['delete_response']>;
  mutationInput_create_input_items_items_eventType: MutationInput_Create_Input_Items_Items_EventType;
  mutationInput_create_input_items_items_purpose: MutationInput_Create_Input_Items_Items_Purpose;
  mutationInput_create_input_items_items_resolution: MutationInput_Create_Input_Items_Items_Resolution;
  mutationInput_create_input_items_items_role: MutationInput_Create_Input_Items_Items_Role;
  mutationInput_replace_input_flags_items: MutationInput_Replace_Input_Flags_Items;
  mutationInput_update_input_flags_items: MutationInput_Update_Input_Flags_Items;
  mutation_update_for_flags_oneOf_0_flags_items: Mutation_Update_For_Flags_OneOf_0_Flags_Items;
  queryInput_search_activation_progress: QueryInput_Search_Activation_Progress;
  queryInput_search_company_role: QueryInput_Search_Company_Role;
  queryInput_search_company_roles_items: QueryInput_Search_Company_Roles_Items;
  queryInput_search_event_type: QueryInput_Search_Event_Type;
  queryInput_search_event_types_items: QueryInput_Search_Event_Types_Items;
  queryInput_search_exclude_company_roles_items: QueryInput_Search_Exclude_Company_Roles_Items;
  queryInput_search_for_accessible_users_activation_progress: QueryInput_Search_For_Accessible_Users_Activation_Progress;
  queryInput_search_for_accessible_users_company_role: QueryInput_Search_For_Accessible_Users_Company_Role;
  queryInput_search_for_accessible_users_company_roles_items: QueryInput_Search_For_Accessible_Users_Company_Roles_Items;
  queryInput_search_for_accessible_users_exclude_company_roles_items: QueryInput_Search_For_Accessible_Users_Exclude_Company_Roles_Items;
  queryInput_search_for_accessible_users_purpose: QueryInput_Search_For_Accessible_Users_Purpose;
  queryInput_search_for_accessible_users_user_type: QueryInput_Search_For_Accessible_Users_User_Type;
  queryInput_search_purpose: QueryInput_Search_Purpose;
  queryInput_search_resolution: QueryInput_Search_Resolution;
  queryInput_search_role: QueryInput_Search_Role;
  queryInput_search_roles_items: QueryInput_Search_Roles_Items;
  queryInput_search_source_type: QueryInput_Search_Source_Type;
  queryInput_search_source_types_items: QueryInput_Search_Source_Types_Items;
  queryInput_search_user_type: QueryInput_Search_User_Type;
  replace_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['replace_response']>;
  retrieve_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['retrieve_response']>;
  search_for_accessible_users_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['search_for_accessible_users_response']>;
  search_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['search_response']>;
  update_for_company_relations_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_company_relations_response']>;
  update_for_deactivates_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_deactivates_response']>;
  update_for_emails_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_emails_response']>;
  update_for_flags_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_flags_response']>;
  update_for_names_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_names_response']>;
  update_for_reset_ssos_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_reset_ssos_response']>;
  update_for_thumbnail_urls_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_for_thumbnail_urls_response']>;
  update_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['update_response']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AccessibleUserList: AccessibleUserList;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  DeactivateUser_Input: DeactivateUser_Input;
  EmailAddress: Scalars['EmailAddress']['output'];
  Error: Error;
  ErrorContext: ErrorContext;
  Flags: Flags;
  Flags_Input: Flags_Input;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSON_container: Json_Container;
  Mutation: {};
  NewUserProjectRoleEventBatch_Input: NewUserProjectRoleEventBatch_Input;
  NewUserProjectRoleEvent_Input: NewUserProjectRoleEvent_Input;
  ObjMap: Scalars['ObjMap']['output'];
  Query: {};
  ReplaceUserPreferences_Input: ReplaceUserPreferences_Input;
  String: Scalars['String']['output'];
  SubError: SubError;
  URL: Scalars['URL']['output'];
  UUID: Scalars['UUID']['output'];
  UpdateCompanyRelationResponse: UpdateCompanyRelationResponse;
  UpdateCompanyRelation_Input: UpdateCompanyRelation_Input;
  UpdateUserEmail_Input: UpdateUserEmail_Input;
  UpdateUserField_Input: UpdateUserField_Input;
  UpdateUserName_Input: UpdateUserName_Input;
  UpdateUserPreferences_Input: UpdateUserPreferences_Input;
  UpdateUserThumbnailUrl_Input: UpdateUserThumbnailUrl_Input;
  User: User;
  UserPreferences: UserPreferences;
  UserProjectRoleEvent: UserProjectRoleEvent;
  UserProjectRoleEventBatch: UserProjectRoleEventBatch;
  UserProjectRoleEventList: UserProjectRoleEventList;
  Void: Scalars['Void']['output'];
  Void_container: Void_Container;
  create_for_republishes_response: ResolversUnionTypes<ResolversParentTypes>['create_for_republishes_response'];
  create_response: ResolversUnionTypes<ResolversParentTypes>['create_response'];
  delete_response: ResolversUnionTypes<ResolversParentTypes>['delete_response'];
  replace_response: ResolversUnionTypes<ResolversParentTypes>['replace_response'];
  retrieve_response: ResolversUnionTypes<ResolversParentTypes>['retrieve_response'];
  search_for_accessible_users_response: ResolversUnionTypes<ResolversParentTypes>['search_for_accessible_users_response'];
  search_response: ResolversUnionTypes<ResolversParentTypes>['search_response'];
  update_for_company_relations_response: ResolversUnionTypes<ResolversParentTypes>['update_for_company_relations_response'];
  update_for_deactivates_response: ResolversUnionTypes<ResolversParentTypes>['update_for_deactivates_response'];
  update_for_emails_response: ResolversUnionTypes<ResolversParentTypes>['update_for_emails_response'];
  update_for_flags_response: ResolversUnionTypes<ResolversParentTypes>['update_for_flags_response'];
  update_for_names_response: ResolversUnionTypes<ResolversParentTypes>['update_for_names_response'];
  update_for_reset_ssos_response: ResolversUnionTypes<ResolversParentTypes>['update_for_reset_ssos_response'];
  update_for_thumbnail_urls_response: ResolversUnionTypes<ResolversParentTypes>['update_for_thumbnail_urls_response'];
  update_response: ResolversUnionTypes<ResolversParentTypes>['update_response'];
}>;

export type EnumDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['String']['input']>;
};

export type EnumDirectiveResolver<Result, Parent, ContextType = any, Args = EnumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HttpOperationDirectiveArgs = {
  httpMethod?: Maybe<HttpMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  jsonApiFields?: Maybe<Scalars['Boolean']['input']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
  path?: Maybe<Scalars['String']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  subgraph?: Maybe<Scalars['String']['input']>;
};

export type HttpOperationDirectiveResolver<Result, Parent, ContextType = any, Args = HttpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type OneOfDirectiveArgs = { };

export type OneOfDirectiveResolver<Result, Parent, ContextType = any, Args = OneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ResolveRootDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
};

export type ResolveRootDirectiveResolver<Result, Parent, ContextType = any, Args = ResolveRootDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type StatusCodeTypeNameDirectiveArgs = {
  statusCode?: Maybe<Scalars['ID']['input']>;
  subgraph?: Maybe<Scalars['String']['input']>;
  typeName?: Maybe<Scalars['String']['input']>;
};

export type StatusCodeTypeNameDirectiveResolver<Result, Parent, ContextType = any, Args = StatusCodeTypeNameDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TransportDirectiveArgs = {
  headers?: Maybe<Scalars['ObjMap']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  queryParams?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  subgraph?: Maybe<Scalars['String']['input']>;
};

export type TransportDirectiveResolver<Result, Parent, ContextType = any, Args = TransportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccessibleUserListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessibleUserList'] = ResolversParentTypes['AccessibleUserList']> = ResolversObject<{
  _links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['ErrorContext']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  retryable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorContext'] = ResolversParentTypes['ErrorContext']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['SubError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlagsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flags'] = ResolversParentTypes['Flags']> = ResolversObject<{
  flags?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_update_for_flags_oneOf_0_flags_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type Json_ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['JSON_container'] = ResolversParentTypes['JSON_container']> = ResolversObject<{
  JSON?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['create_response']>, ParentType, ContextType, Partial<MutationCreateArgs>>;
  create_for_republishes?: Resolver<Maybe<ResolversTypes['create_for_republishes_response']>, ParentType, ContextType, RequireFields<MutationCreate_For_RepublishesArgs, 'user_project_role_event_id'>>;
  delete?: Resolver<Maybe<ResolversTypes['delete_response']>, ParentType, ContextType, RequireFields<MutationDeleteArgs, 'client_relationship_lead_id' | 'pending_provider_invite_id' | 'person_id' | 'terms_of_service_acceptance_id' | 'user_favorite_project_id' | 'user_preferences_id'>>;
  replace?: Resolver<Maybe<ResolversTypes['replace_response']>, ParentType, ContextType, RequireFields<MutationReplaceArgs, 'person_id' | 'user_favorite_project_id' | 'user_preferences_id'>>;
  update?: Resolver<Maybe<ResolversTypes['update_response']>, ParentType, ContextType, RequireFields<MutationUpdateArgs, 'client_relationship_lead_id' | 'person_id' | 'user_preferences_id'>>;
  update_for_company_relations?: Resolver<Maybe<ResolversTypes['update_for_company_relations_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_Company_RelationsArgs, 'user_id'>>;
  update_for_deactivates?: Resolver<Maybe<ResolversTypes['update_for_deactivates_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_DeactivatesArgs, 'user_id'>>;
  update_for_emails?: Resolver<Maybe<ResolversTypes['update_for_emails_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_EmailsArgs, 'user_id'>>;
  update_for_flags?: Resolver<Maybe<ResolversTypes['update_for_flags_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_FlagsArgs, 'user_preferences_id'>>;
  update_for_names?: Resolver<Maybe<ResolversTypes['update_for_names_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_NamesArgs, 'user_id'>>;
  update_for_reset_ssos?: Resolver<Maybe<ResolversTypes['update_for_reset_ssos_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_Reset_SsosArgs, 'user_id'>>;
  update_for_thumbnail_urls?: Resolver<Maybe<ResolversTypes['update_for_thumbnail_urls_response']>, ParentType, ContextType, RequireFields<MutationUpdate_For_Thumbnail_UrlsArgs, 'user_id'>>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  retrieve?: Resolver<Maybe<ResolversTypes['retrieve_response']>, ParentType, ContextType, RequireFields<QueryRetrieveArgs, 'account_manager_id' | 'client_relationship_lead_id' | 'pending_provider_invite_id' | 'person_id' | 'terms_of_service_acceptance_id' | 'user_event_id' | 'user_favorite_project_id' | 'user_id' | 'user_info_event_id' | 'user_info_id' | 'user_preferences_id' | 'user_project_role_event_id' | 'user_project_role_id'>>;
  search?: Resolver<Maybe<ResolversTypes['search_response']>, ParentType, ContextType, Partial<QuerySearchArgs>>;
  search_for_accessible_users?: Resolver<Maybe<ResolversTypes['search_for_accessible_users_response']>, ParentType, ContextType, RequireFields<QuerySearch_For_Accessible_UsersArgs, 'user_id'>>;
}>;

export type SubErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubError'] = ResolversParentTypes['SubError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdateCompanyRelationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCompanyRelationResponse'] = ResolversParentTypes['UpdateCompanyRelationResponse']> = ResolversObject<{
  updated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  activationProgress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  companyRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  deactivated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  invitationCompanyRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitationLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitationLinkType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitationMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitationSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCommonEmailDomain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeactivated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reinvited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  salesforceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termsSignedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  termsVersionSigned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences']> = ResolversObject<{
  _links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  clock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  emailDigestsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  emailEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  flags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  userSetLocalisation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProjectRoleEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProjectRoleEvent'] = ResolversParentTypes['UserProjectRoleEvent']> = ResolversObject<{
  _links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  _state?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  clock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handlePermissions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  userProjectRoleId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProjectRoleEventBatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProjectRoleEventBatch'] = ResolversParentTypes['UserProjectRoleEventBatch']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['UserProjectRoleEvent']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProjectRoleEventListResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProjectRoleEventList'] = ResolversParentTypes['UserProjectRoleEventList']> = ResolversObject<{
  _links?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['UserProjectRoleEvent']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Void_ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Void_container'] = ResolversParentTypes['Void_container']> = ResolversObject<{
  Void?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Create_For_Republishes_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['create_for_republishes_response'] = ResolversParentTypes['create_for_republishes_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'JSON_container', ParentType, ContextType>;
}>;

export type Create_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['create_response'] = ResolversParentTypes['create_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UserProjectRoleEventBatch', ParentType, ContextType>;
}>;

export type Delete_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['delete_response'] = ResolversParentTypes['delete_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'Void_container', ParentType, ContextType>;
}>;

export type Replace_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['replace_response'] = ResolversParentTypes['replace_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UserPreferences', ParentType, ContextType>;
}>;

export type Retrieve_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['retrieve_response'] = ResolversParentTypes['retrieve_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UserProjectRoleEvent', ParentType, ContextType>;
}>;

export type Search_For_Accessible_Users_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['search_for_accessible_users_response'] = ResolversParentTypes['search_for_accessible_users_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AccessibleUserList' | 'Error', ParentType, ContextType>;
}>;

export type Search_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['search_response'] = ResolversParentTypes['search_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UserProjectRoleEventList', ParentType, ContextType>;
}>;

export type Update_For_Company_Relations_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_company_relations_response'] = ResolversParentTypes['update_for_company_relations_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UpdateCompanyRelationResponse', ParentType, ContextType>;
}>;

export type Update_For_Deactivates_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_deactivates_response'] = ResolversParentTypes['update_for_deactivates_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'User', ParentType, ContextType>;
}>;

export type Update_For_Emails_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_emails_response'] = ResolversParentTypes['update_for_emails_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'User', ParentType, ContextType>;
}>;

export type Update_For_Flags_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_flags_response'] = ResolversParentTypes['update_for_flags_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'Flags', ParentType, ContextType>;
}>;

export type Update_For_Names_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_names_response'] = ResolversParentTypes['update_for_names_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'User', ParentType, ContextType>;
}>;

export type Update_For_Reset_Ssos_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_reset_ssos_response'] = ResolversParentTypes['update_for_reset_ssos_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'User', ParentType, ContextType>;
}>;

export type Update_For_Thumbnail_Urls_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_for_thumbnail_urls_response'] = ResolversParentTypes['update_for_thumbnail_urls_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'User', ParentType, ContextType>;
}>;

export type Update_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['update_response'] = ResolversParentTypes['update_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Error' | 'UserPreferences', ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AccessibleUserList?: AccessibleUserListResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  ErrorContext?: ErrorContextResolvers<ContextType>;
  Flags?: FlagsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSON_container?: Json_ContainerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  SubError?: SubErrorResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UpdateCompanyRelationResponse?: UpdateCompanyRelationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPreferences?: UserPreferencesResolvers<ContextType>;
  UserProjectRoleEvent?: UserProjectRoleEventResolvers<ContextType>;
  UserProjectRoleEventBatch?: UserProjectRoleEventBatchResolvers<ContextType>;
  UserProjectRoleEventList?: UserProjectRoleEventListResolvers<ContextType>;
  Void?: GraphQLScalarType;
  Void_container?: Void_ContainerResolvers<ContextType>;
  create_for_republishes_response?: Create_For_Republishes_ResponseResolvers<ContextType>;
  create_response?: Create_ResponseResolvers<ContextType>;
  delete_response?: Delete_ResponseResolvers<ContextType>;
  replace_response?: Replace_ResponseResolvers<ContextType>;
  retrieve_response?: Retrieve_ResponseResolvers<ContextType>;
  search_for_accessible_users_response?: Search_For_Accessible_Users_ResponseResolvers<ContextType>;
  search_response?: Search_ResponseResolvers<ContextType>;
  update_for_company_relations_response?: Update_For_Company_Relations_ResponseResolvers<ContextType>;
  update_for_deactivates_response?: Update_For_Deactivates_ResponseResolvers<ContextType>;
  update_for_emails_response?: Update_For_Emails_ResponseResolvers<ContextType>;
  update_for_flags_response?: Update_For_Flags_ResponseResolvers<ContextType>;
  update_for_names_response?: Update_For_Names_ResponseResolvers<ContextType>;
  update_for_reset_ssos_response?: Update_For_Reset_Ssos_ResponseResolvers<ContextType>;
  update_for_thumbnail_urls_response?: Update_For_Thumbnail_Urls_ResponseResolvers<ContextType>;
  update_response?: Update_ResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  enum?: EnumDirectiveResolver<any, any, ContextType>;
  httpOperation?: HttpOperationDirectiveResolver<any, any, ContextType>;
  oneOf?: OneOfDirectiveResolver<any, any, ContextType>;
  resolveRoot?: ResolveRootDirectiveResolver<any, any, ContextType>;
  statusCodeTypeName?: StatusCodeTypeNameDirectiveResolver<any, any, ContextType>;
  transport?: TransportDirectiveResolver<any, any, ContextType>;
}>;
