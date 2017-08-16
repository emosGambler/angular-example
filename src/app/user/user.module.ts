import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        LoginComponent,
        ProfileComponent
    ],
    providers: [

    ]
})
export class UserModule {

}