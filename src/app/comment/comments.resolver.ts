import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CommentsService } from './shared/comments.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsResolver implements Resolve<any> {

  constructor(private commentSerivce:CommentsService) { }

  resolve() {
    return this.commentSerivce.getComments().map(comments => comments);
  }
}

