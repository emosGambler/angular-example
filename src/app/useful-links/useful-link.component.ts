import { Component, Input } from '@angular/core';

@Component({
    selector: 'useful-link',
    template: `
        <div class="col col-md-6">
            <div class="panel panel-info">
                <div class="panel-heading">{{ link.name }}</div>
                <div class="panel-body">
                    <p>{{ link.description }}</p>
                    <p>{{ link.url }}</p>
                </div>
            </div>
        </div>
    `
})
export class UsefulLinkComponent {
    @Input() private link: any;
    
    constructor() { }
}