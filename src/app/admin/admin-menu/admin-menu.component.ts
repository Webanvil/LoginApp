import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/admin/admin-shared/user.service';
import { Router } from '@angular/router';
import { Member } from 'app/admin/admin-shared/member';
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";

@Component({
  selector: 'la-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  theUser: string;
  userId: string;
  
  
  constructor(private _userSVC: UserService, private _router: Router) { }

  ngOnInit() {
    this.theUser = this._userSVC.loggedInUser;
    this.userId = this._userSVC.userId;
  }

//Logs the current user out
  logout(){
    this._userSVC.logout();
    this._router.navigate(['']);
  }

}
