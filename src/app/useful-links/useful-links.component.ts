import { Component, Input } from '@angular/core';
import { UsefulLinksService } from './../shared/useful-links.service';

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
    usefulLinks: any[];
    constructor(private usefulLinksService: UsefulLinksService) { 
        this.usefulLinks = usefulLinksService.getUsefulLinks();
    }
}