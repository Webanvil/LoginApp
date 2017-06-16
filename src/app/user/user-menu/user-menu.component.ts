import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/admin/admin-shared/user.service';
import { Router } from '@angular/router';
import { Member } from 'app/admin/admin-shared/member';
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";

@Component({
  selector: 'la-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  theUser: string;
  userId: string;

  adminAccount: boolean = false;
  displayName: string;
  firstName: string;
  surname: string;
  twitterHandle: string;
  cellNumber: string;

  constructor(private _userSVC: UserService, private _router: Router) { }

  ngOnInit() {
    this.theUser = this._userSVC.loggedInUser;
    this.userId = this._userSVC.userId;
    this.getUserDetails();
  }

  //Gets the current users details from the database
  getUserDetails() {
    let dbRef = firebase.database().ref('/users/' + this.userId)
      .once('value')
      .then((snapshot) => {
       if (snapshot.exists()){
        var tmp = snapshot.val();
        var transform = Object.keys(tmp).map(key => tmp[key]);
        this.adminAccount = transform[0].adminAccount;
        this.displayName = transform[0].displayName;
        this.firstName = transform[0].firstName;
        this.surname = transform[0].surname;
        this.twitterHandle = transform[0].twitterHandle;
        this.cellNumber = transform[0].cellNumber
        console.log('User Details = ' + JSON.stringify(snapshot))
        console.log('Admin User =' + this.adminAccount);
       }
      });
  }

  //Logs the current user out
  logout() {
    this._userSVC.logout();
    this._router.navigate(['']);
  }

}
