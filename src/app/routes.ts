import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

export const routes: Routes = [
    { path: 'usefulLinks', component: UsefulLinksComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
]