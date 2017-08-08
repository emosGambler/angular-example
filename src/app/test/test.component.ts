import { Component, OnInit } from '@angular/core';
import { UsefulLinksService } from './../shared/useful-links.service';

@Component({
    templateUrl: './../useful-links/useful-link.component.html'
})
export class TestComponent implements OnInit {
    link: any;

    constructor(private usefulLinksService: UsefulLinksService) {}

    ngOnInit() {
        this.link = this.usefulLinksService.getUsefulLink(0);
    }
}