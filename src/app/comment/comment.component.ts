import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommentsService } from './../shared/comments.service';
import { Helper } from './../shared/helper';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styles: [`
        .comment { min-height: 200px;}
    `]
})
export class CommentComponent {
    @Input() private comment: any;
    private shouldHideUrl: boolean = false;

    constructor(private helper: Helper,
        private commentsService: CommentsService,
        private route: ActivatedRoute
    ) { }

    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}