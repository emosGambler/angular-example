import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        const birthDate: Date = new Date(1993, 3, 21);
        this.currentUser = {
            id: 0,
            firstName: 'Jacek',
            lastName: 'Góraj',
            userName: userName,
            birthDate: 'birthDate',
            location: {
                planet: 'Earth',
                country: 'Poland',
                city: 'Poznań'
            }
        }
    }

    isAuthenticated() {
        return Boolean(this.currentUser);
    }
}