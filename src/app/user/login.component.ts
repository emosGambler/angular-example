import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authService: AuthService,
        private router: Router
    ) { };

    login(loginValues) {
        this.authService.loginUser(loginValues.loginUser, loginValues.password);
        this.router.navigate(['comments']);
    }

    cancel() {
        this.router.navigate(['comments']);
    }
}