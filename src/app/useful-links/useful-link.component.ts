import { Component, Input } from '@angular/core';
import * as toastr from 'toastr';

@Component({
    selector: 'useful-link',
    templateUrl: './useful-link.component.html',
    styles: [`
        .usefulLink { min-height: 200px;}
    `]
})
export class UsefulLinkComponent {
    @Input() private link: any;
    private shouldHideUrl: boolean = false;

    constructor() { }

    showHideUrl() {
        if (this.shouldHideUrl) {
            toastr.info('Url shown');
        } else {
            toastr.info('Url hidden');
        }
        this.shouldHideUrl = !this.shouldHideUrl;
    }
}