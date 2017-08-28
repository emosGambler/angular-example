import { 
  CommentComponent,
  CommentResolver,
  CommentsComponent,
  CommentsResolver,
  CommentsService,
  CommentRouteActivator,
  DetailedCommentComponent,
  NewCommentComponent
} from './comment/index'

import { AboutComponent } from './about/about.component';
import { Error404Component } from './error/404.component';
import { Routes } from '@angular/router';
import { NewSessionComponent } from './session/new-session.component';

export const routes: Routes = [
    { path: 'session/new', component: NewSessionComponent },
    { path: 'comments', component: CommentsComponent, resolve: { comments: CommentsResolver } },
    { path: 'about', component: AboutComponent },
    { path: 'comment/new', component: NewCommentComponent, canDeactivate: ['canDeactivateNewComment'] },
    { path: 'comment/:id', component: DetailedCommentComponent, resolve: {comment: CommentResolver}, canActivate: [CommentRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '**', redirectTo: '/404' }
]
