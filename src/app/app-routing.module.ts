import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { ErrorComponent } from 'app/error/error.component';
import { AdminPageComponent } from 'app/admin/admin-page/admin-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'admin', component:AdminPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
