import { Component, Input } from '@angular/core';
import { mockupData } from './../data/api.mockup';

@Component({
    selector: 'useful-links',
    template: `
        <div class="row">
            <div *ngFor="let link of usefulLinks" class="col-md-6">
                <useful-link [link]="link"></useful-link>
            </div>
        </div>
    `
})
export class UsefulLinksComponent {
    private usefulLinks: any = mockupData

    constructor() { }
}