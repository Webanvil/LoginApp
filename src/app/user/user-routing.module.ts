import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from 'app/user/user-page/user-page.component';
import { UserWelcomeComponent } from 'app/user/user-welcome/user-welcome.component';

const routes: Routes = [{
path: 'user',
    component: UserPageComponent,
    children: [
      {path: '', component: UserWelcomeComponent},
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
  
})
export class UserRoutingModule { }
