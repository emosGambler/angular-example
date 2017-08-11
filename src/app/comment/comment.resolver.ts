import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {CommentsService} from "../shared/comments.service";

@Injectable()
export class CommentResolver implements Resolve<any> {
  constructor(private commentSerivce:CommentsService){

  }
  resolve(route: ActivatedRouteSnapshot){
    return this.commentSerivce.getComment(route.params['id'])
  }
}

