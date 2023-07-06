import { createAction, props } from "@ngrx/store";
import { Posts } from "src/types/posts";

export const getPosts = createAction('Get Posts');

export const getPostsSuccess = createAction('Get Posts Success', props<{posts: Posts[]}>());

export const getPostsFailure = createAction('Get Posts Failure', props<{error: string}>());