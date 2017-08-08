import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommentsComponent } from './comment/comments.component';

export const routes: Routes = [
    { path: 'comments', component: CommentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'test/:id', component: TestComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
]