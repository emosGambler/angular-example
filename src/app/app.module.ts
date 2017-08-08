import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routes } from './routes';
import { TestComponent } from './test/test.component';
import { UsefulLinkComponent } from './useful-links/useful-link.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { UsefulLinksService } from './shared/useful-links.service';
import { Helper } from './shared/helper';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    TestComponent,
    UsefulLinkComponent,
    UsefulLinksComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsefulLinksService,
    Helper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
