import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customHttpProvider } from './common/services/chttp.service';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { routing } from './app.routing';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { UpdateService } from './services/update.service';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AuthService,
    CommentService,
    UpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
