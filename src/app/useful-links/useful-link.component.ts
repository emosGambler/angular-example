import { Component, Input } from '@angular/core';
import { Helper } from './../shared/helper';

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

    constructor(private helper: Helper) { }

    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}