import { Posts } from "./posts";

export interface PostsState {
    isLoading: boolean;
    posts: Posts[];
    error: string | null;
}