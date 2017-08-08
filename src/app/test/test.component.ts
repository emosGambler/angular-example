import { Component, OnInit } from '@angular/core';
//import { UsefulLinksService } from './../shared/useful-links.service';
import { ActivatedRoute } from '@angular/router';
import { Helper } from './../shared/helper';

@Component({
    template: `
    <div></div>
    `
})
export class TestComponent implements OnInit {
    private link: any;
    private shouldHideUrl: boolean = false;

    constructor(private route: ActivatedRoute,
        private helper: Helper
    ) {}

    ngOnInit() {
       
    }
    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}