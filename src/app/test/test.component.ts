import { Component, OnInit } from '@angular/core';
import { UsefulLinksService } from './../shared/useful-links.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './../useful-links/useful-link.component.html'
})
export class TestComponent implements OnInit {
    link: any;

    constructor(private usefulLinksService: UsefulLinksService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.link = this.usefulLinksService.getUsefulLink(
            +this.route.snapshot.params['id']
        );
    }
}