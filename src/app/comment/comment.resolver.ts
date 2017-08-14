import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CommentsService } from './shared/comments.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentResolver implements Resolve<any> {

  constructor(private commentSerivce:CommentsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.commentSerivce.getComment(route.params['id']);
  }
}

