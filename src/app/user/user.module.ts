import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],

  declarations: 
  [UserPageComponent,
   UserMenuComponent,
   UserWelcomeComponent
  ]
  
})
export class UserModule { }
