import { Component, Input } from '@angular/core';

@Component({
    selector: 'useful-link',
    template: `
        <div class="panel usefulLink">
            <div class="panel panel-info">
                <div class="panel-heading">{{ link.name }}</div>
                <div class="panel-body">
                    <p>{{ link.description }}</p>
                    <p [hidden]="shouldHideUrl">{{ link.url }}
                        <a class="btn btn-info" (click)="showHideUrl()">Hide</a>
                    </p>
                    <p [hidden]="!shouldHideUrl"> <a class="btn btn-success" (click)="showHideUrl()">Show</a></p>
                    <p [style.color]="link.rate > 8.0 ? '#228b22': '#bbb'" *ngIf="link.rate">Rate: {{ link.rate }}</p>
                    <div [ngSwitch]="link.type">
                        <p *ngSwitchCase="'information'" class="glyphicon glyphicon-info-sign">
                        <p *ngSwitchCase="'fun'" class="glyphicon glyphicon-tower">
                        <p *ngSwitchCase="'programming'" class="glyphicon glyphicon-arrow-right">
                        <p *ngSwitchCase="'other'">
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .usefulLink { min-height: 200px;}
    `]
})
export class UsefulLinkComponent {
    @Input() private link: any;
    private shouldHideUrl: boolean = false;

    constructor() { }

    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
    }
}