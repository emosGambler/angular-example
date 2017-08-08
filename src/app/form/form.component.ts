import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './form.component.html'
})
export class FormComponent {
    
    constructor() {}
    private isShown = false;
    private buttonText = "Show";
    private authorsData = {
        name: 'Jacek Goraj',
        birthDate: '21/03/1993',
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