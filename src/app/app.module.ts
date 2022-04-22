import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersComponent } from './users/users.component';
import {TokenInterceptor} from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
