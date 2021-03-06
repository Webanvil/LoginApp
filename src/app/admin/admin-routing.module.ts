import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';
import { AdminWelcomeComponent } from 'app/admin/admin-welcome/admin-welcome.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: AdminWelcomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
