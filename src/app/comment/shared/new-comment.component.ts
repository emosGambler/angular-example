import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
    templateUrl: './new-comment.component.html',
    styles: [`
        .error input {
            background-color: #cc0000;
        }
        em {
            color: red;
        }
    `]
})
export class NewCommentComponent {
    isDirty: boolean = true;
    
    constructor(private commentService: CommentsService,
        private router: Router
    ) { }

    cancel() {
        this.router.navigate(['/comments']);
    }

    saveComment(formValues) {
        this.commentService.saveComment(formValues);
        this.isDirty = false;
        this.router.navigate(['/comments']);
    }
}