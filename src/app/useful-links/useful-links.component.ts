import { Component, Input } from '@angular/core';
import { mockupData } from './../data/api.mockup';

@Component({
    selector: 'useful-links',
    template: `<useful-link *ngFor="let link of usefulLinks" [link]="link"></useful-link>`
})
export class UsefulLinksComponent {
    private usefulLinks: any = mockupData

    constructor() { }
}