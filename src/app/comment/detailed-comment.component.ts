import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { Helper } from './../shared/helper';
import { IComment, ISession } from './shared/comment.model';

@Component({
    templateUrl: './detailed-comment.component.html',
    styles: [`
        .comment { min-height: 200px;}
        a { cursor:pointer }
    `]
})
export class DetailedCommentComponent implements OnInit{
    private addMode: boolean;
    private comment: IComment;
    private shouldHideUrl: boolean = false;
    private filterBy: string = 'all';

    constructor(private helper: Helper,
        private commentsService: CommentsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.comment = this.commentsService.getComment(
            +this.route.snapshot.params['id']
        );
    }

    addSession() {
        this.addMode = true;
    }

    cancelAddSession() {
        this.addMode = false;
    }
    
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.comment.sessions.map(s => {
            s.id;
        }));
        session.id = nextId + 1;
        this.comment.sessions.push(session);
        this.commentsService.updateComment(this.comment);
        this.addMode = false;
    }

    showHideUrl() {
        this.shouldHideUrl = !this.shouldHideUrl;
        this.helper.showHideUrl(this.shouldHideUrl);
    }
}
