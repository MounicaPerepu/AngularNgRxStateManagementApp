import { Injectable } from '@angular/core';
import { Observable, of, delay } from "rxjs";
import { Posts } from 'src/types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<Posts[]> {
    const posts: Posts[] = [
      { id: '1', title: 'First post' },
      { id: '2', title: 'Second post' },
      { id: '3', title: 'Third post' }
    ];
    return of(posts).pipe(delay(2000));
  }
}
