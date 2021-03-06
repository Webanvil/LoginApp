import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';

import { ToastrModule } from 'toastr-ng2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { UserService } from './admin/admin-shared/user.service';

import { UserModule } from 'app/user/user.module';
import { AdminModule } from 'app/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,

    UserModule,
    AdminModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],

  providers:[
    UserService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
