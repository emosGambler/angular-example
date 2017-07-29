import { Component, Input } from '@angular/core';

@Component({
    selector: 'form',
    template: `
        <div class="panel panel-info">
            <div class="panel-heading">Author's information.</div>
            <div class="panel-body" *ngIf="isShown;else withoutData">
                <p>Name: {{authorsData.name}} </p>
                <p> Birth day: {{authorsData.birthDate}} </p>
                <p> Planet: {{authorsData.location.planet}} </p>
                <p> Country: {{authorsData.location.country}} </p>
                <p> City: {{authorsData.location.city}} </p>
                <ng-template #withoutData>
                    <p>Name: - </p>
                    <p> Birth day: - </p>
                    <p> Planet: - </p>
                    <p> Country: - </p>
                    <p> City: - </p>
                </ng-template>
            </div>
            <div class="panel-footer"><a [text]="buttonText" class="btn btn-info" (click)="showHideData()"></a></div>
        </div>
    `,
    styleUrls: ['./form.component.css']
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