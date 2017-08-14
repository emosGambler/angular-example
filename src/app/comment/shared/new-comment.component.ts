import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h2>New comment</h2>
        <hr>
        <div class="col-md-6">
            <h3>[Create new comment will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="cancel" class="btn btn-default" (click)="cancel()">Cancel</button>
        </div>
    `
})
export class NewCommentComponent {
    isDirty: boolean = true;
    
    constructor(private router: Router) { }

    cancel() {
        this.router.navigate(['/comments'])
    }
}