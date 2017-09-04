import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
    
    constructor() {}
    private isShown = false;
    private buttonText = "Show";
    //TODO: read from currentUser
    private authorsData = {
        firstName: 'Jacek',
        lastName: 'Góraj',
        birthDate: new Date(1993, 3, 21),
        location: {
            planet: 'Earth',
            country: 'Poland',
            city: 'Poznan'
        }
    }
    showHideData() {
        this.isShown = !this.isShown;
        if (this.isShown) this.buttonText = "Hide";
            else this.buttonText = "Show";
    }
}