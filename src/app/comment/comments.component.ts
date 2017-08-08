import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from './../shared/comments.service';

@Component({
    template: `
        <div class="row">
            <div *ngFor="let comment of comments" class="col-md-6">
                <comment [comment]="comment"></comment>
            </div>
        </div>
    `
})
export class CommentsComponent implements OnInit{
    comments: any[];

    constructor(private commentsService: CommentsService) { }

    ngOnInit() {
        this.comments = this.commentsService.getComments();
    }
}