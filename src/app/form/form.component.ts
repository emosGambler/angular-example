import { Component } from '@angular/core';

@Component({
    selector: 'form',
    template: `
        <div *ngIf="isShown;else withoutData" class="panel panel-info">
            <div class="panel-heading">Click button to show information about author!</div>
            <div class="panel-body">
                <p>Name: {{authorsData.name}} </p>
                <p> Birth day: {{authorsData.birthDate}} </p>
                <p> Planet: {{authorsData.location.planet}} </p>
                <p> Country: {{authorsData.location.country}} </p>
                <p> City: {{authorsData.location.city}} </p>
            </div>
            <div class="panel-footer"><a class="btn btn-info" (click)="showHideData()">Click it</a></div>
        </div>
        <ng-template #withoutData>
            <div class="panel panel-info">
            <div class="panel-heading">Click button to show information about author!</div>
            <div class="panel-body">
                <p>Name: - </p>
                <p> Birth day: - </p>
                <p> Planet: - </p>
                <p> Country: - </p>
                <p> City: - </p>
            </div>
            <div class="panel-footer"><a class="btn btn-info" (click)="showHideData()">Click it</a></div>
        </div>
        </ng-template>
    `
})
export class FormComponent {
    
    constructor() {}
    private isShown = false;
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
    }
}