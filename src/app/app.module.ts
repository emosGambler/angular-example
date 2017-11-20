import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { 
  CommentComponent,
  CommentResolver,
  CommentsComponent,
  CommentsResolver,
  CommentsService,
  CommentRouteActivator,
  DetailedCommentComponent,
  DurationPipe,
  NewCommentComponent
} from './comment/index'

import { 
  CollapsibleWellComponent,
  NewSessionComponent,
  SessionListComponent,
  SessionNameValidator,
  UpvoteComponent,
  VoterService
} from './session/index';

import { AuthService } from './user/auth.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error/404.component';
import { Helper } from './shared/helper';
import { routes } from './routes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CollapsibleWellComponent,
    CommentComponent,
    CommentsComponent,
    DetailedCommentComponent,
    DurationPipe,
    Error404Component,
    NewCommentComponent,
    NewSessionComponent,
    SessionListComponent,
    SessionNameValidator,
    UpvoteComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()  
  ],
  providers: [
    AuthService,
    CommentsService,
    CommentRouteActivator,
    Helper,
    CommentResolver,
    CommentsResolver,
    VoterService,
    { 
      provide: 'canDeactivateNewComment', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: NewCommentComponent) {
  if (component.isDirty) {
    return window.confirm('You have unsaved changes. Do you want to leave this page?');
  }
    return true;
}