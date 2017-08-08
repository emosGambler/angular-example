import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comment/comments.component';
import { DetailedCommentComponent } from './comment/detailed-comment.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'comments', component: CommentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'comment/:id', component: DetailedCommentComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
]