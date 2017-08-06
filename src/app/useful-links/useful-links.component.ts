import { Component, Input, OnInit } from '@angular/core';
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
export class UsefulLinksComponent implements OnInit{
    usefulLinks: any[];

    constructor(private usefulLinksService: UsefulLinksService) { }

    ngOnInit() {
        this.usefulLinks = this.usefulLinksService.getUsefulLinks();
    }
}