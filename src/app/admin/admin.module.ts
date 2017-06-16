import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    AdminWelcomeComponent
  ]
})
export class AdminModule { }
