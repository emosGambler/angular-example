import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CommentsService } from './../shared/comments.service';

@Injectable()
export class CommentRouteActivator implements CanActivate{
    constructor(private commentsService: CommentsService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const isCommentIdValid = Boolean(this.commentsService.getComment(route.params['id']));

        if (isCommentIdValid) {
            this.router.navigate(['/404']);
        }

        return !isCommentIdValid;
    }
}