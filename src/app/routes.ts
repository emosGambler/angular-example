import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comment/comments.component';
import { DetailedCommentComponent } from './comment/detailed-comment.component';
import { NewCommentComponent } from './shared/new-comment.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'comments', component: CommentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'comment/new', component: NewCommentComponent },
    { path: 'comment/:id', component: DetailedCommentComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
]