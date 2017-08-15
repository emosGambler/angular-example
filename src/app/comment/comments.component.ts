import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { IComment } from './shared/comment.model';

@Component({
    template: `
        <h2>Comments</h2>
        <hr>
        <div class="row">
            <div *ngFor="let comment of comments" class="col-md-6">
                <comment [comment]="comment"></comment>
            </div>
        </div>
    `
})
export class CommentsComponent implements OnInit{
    comments: IComment[];

    constructor(private commentsService: CommentsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.comments = this.route.snapshot.data['comments'];
    }
}