import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comment/comments.component';
import { CommentRouteActivator } from './comment/comment-route-activator.service';
import { DetailedCommentComponent } from './comment/detailed-comment.component';
import { Error404Component } from './error/404.component';
import { NewCommentComponent } from './shared/new-comment.component';
import { Routes } from '@angular/router';
import {CommentResolver} from "./comment/comment.resolver";

export const routes: Routes = [
    { path: 'comments', component: CommentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'comment/new', component: NewCommentComponent, canDeactivate: ['canDeactivateNewComment()'] },
    { path: 'comment/:id', component: DetailedCommentComponent, resolve: {comment: CommentResolver}, canActivate: [CommentRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
]
