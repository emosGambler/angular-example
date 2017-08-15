import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { Helper } from './../shared/helper';
import { IComment } from './shared/comment.model';

@Component({
    templateUrl: './detailed-comment.component.html',
    styles: [`
        .comment { min-height: 200px;}
    `]
})
export class DetailedCommentComponent implements OnInit{
    private comment: IComment;
    private shouldHideUrl: boolean = false;

    constructor(private helper: Helper,
        private commentsService: CommentsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.comment = this.commentsService.getComment(
            +this.route.snapshot.params['id']
        );
    }
    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}
