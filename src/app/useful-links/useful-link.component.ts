import { Component, Input } from '@angular/core';

@Component({
    selector: 'useful-link',
    template: `
        <div class="panel panel-info usefulLink">
            <div class="panel-heading">{{ link.name }}</div>
            <div class="panel-body">
                <p>{{ link.description }}</p>
                <p>{{ link.url }}</p>
            </div>
        </div>
    `,
    styles: [`
        .usefulLink { min-height: 200px }
    `]
})
export class UsefulLinkComponent {
    @Input() private link: any;
    
    constructor() { }
}