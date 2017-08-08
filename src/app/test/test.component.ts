import { Component, OnInit } from '@angular/core';
import { UsefulLinksService } from './../shared/useful-links.service';
import { ActivatedRoute } from '@angular/router';
import { Helper } from './../shared/helper';

@Component({
    templateUrl: './../useful-links/useful-link.component.html'
})
export class TestComponent implements OnInit {
    private link: any;
    private shouldHideUrl: boolean = false;

    constructor(private usefulLinksService: UsefulLinksService,
        private route: ActivatedRoute,
        private helper: Helper
    ) {}

    ngOnInit() {
        this.link = this.usefulLinksService.getUsefulLink(
            +this.route.snapshot.params['id']
        );
    }
    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}