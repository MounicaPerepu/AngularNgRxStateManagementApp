import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../../store/actions';
import { errorSelector, isLoadingSelector, postsSelector } from 'src/store/selectors';
import { AppState } from 'src/types/appState';
import { Posts } from 'src/types/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<Posts[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
  }
}
