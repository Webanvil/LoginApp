import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/admin/admin-shared/user.service';
import { Router } from '@angular/router';

@Component({
  
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  theUser: string;

  constructor(private _userSVC: UserService, private _router : Router) { }

  ngOnInit() {
    this.theUser = this._userSVC.loggedInUser;
  }

  logout(){
    this._userSVC.logout();
    this._router.navigate(['']);
  }

}
