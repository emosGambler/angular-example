import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as toastr from 'toastr';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        .error input {
            background-color: #cc0000;
        }
    `]
})
export class ProfileComponent implements OnInit{
    profileForm: FormGroup;

    constructor(private authService: AuthService,
        private router: Router
    ) { };

    ngOnInit() {
        let firstName = new FormControl(
            this.authService.currentUser.firstName,
            Validators.required
        );
        let lastName = new FormControl(
            this.authService.currentUser.lastName,
            Validators.required
        );
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    cancel() {
        this.router.navigate(['comments']);
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['comments']);
            toastr.success('Successfuly updated user!');
        };
    }
}