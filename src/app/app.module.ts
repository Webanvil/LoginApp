import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { UserService } from './admin/admin-shared/user.service';
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
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule
  ],
  providers:[
    UserService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
