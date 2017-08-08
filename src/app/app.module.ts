import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comment/comments.component';
import { CommentsService } from './shared/comments.service';
import { Helper } from './shared/helper';
import { routes } from './routes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CommentsService,
    Helper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
