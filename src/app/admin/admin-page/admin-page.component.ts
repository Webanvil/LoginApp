import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/admin/admin-shared/user.service';
import { Router } from '@angular/router';
import { Member } from 'app/admin/admin-shared/member';
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";

@Component({
  
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  theUser: string;

  adminAccount: boolean = false;
  displayName: string;
  firstName: string;
  surname: string;
  twitterHandle: string;
  cellNumber: string;

  userId: string;

  membersDetails: Member;
  user: Member;

  constructor(private _userSVC: UserService, private _router : Router) { }

  ngOnInit() {
    this.theUser = this._userSVC.loggedInUser;
    this.userId = this._userSVC.userId;
    this.getUserDetails();
    console.log("Used Id = " + this.userId)
    
  }

  createMember(memberForm: NgForm){
    this.user = new Member(
      this.adminAccount,
      this.displayName,
      this.firstName,
      this.surname,
      this.twitterHandle,
      this.cellNumber
    );
    this._userSVC.createMember(this.user);
    alert(`Member details have been updated`);

    //For debugging and testing
    console.log(memberForm.form);
    console.log('Saved: ' + JSON.stringify(memberForm.value));
  }

  logout(){
    this._userSVC.logout();
    this._router.navigate(['']);
  }

  //Gets the current users details from the database
    getUserDetails(){
      let dbRef = firebase.database().ref('/users/' + this.userId)
        .once('value')
        .then((snapshot)=>{
        var tmp = snapshot.val();
         var transform = Object.keys(tmp).map(key => tmp[key]);
         this.adminAccount = transform[0].adminAccount;
         this.displayName = transform[0].displayName;
         this.firstName = transform[0].firstName;
         this.surname = transform[0].surname;
         this.twitterHandle = transform[0].twitterHandle;
         this.cellNumber = transform[0].cellNumber;



        //  var transform = Object.keys(tmp).map(function(key,index){});
          // let ac = transform[0].adminAccount;
          // let dn = transform[0].displayName;
          // let fn = transform[0].firstName;
          // let sn = transform[0].surname;
          // let th = transform[0].twitterHandle;
          // let cn = transform[0].cellNumber;
          // this.membersDetails = new Member(
          //   ac,
          //   dn,
          //   fn,
          //   sn,
          //   th,
          //   cn
          // )
          //console.log('Temp Value = ' + tmp);
          //console.log('Transform Data = ' + transform);
          console.log('User Details = ' + JSON.stringify(snapshot))
          //console.log('Admin Account = ' + this.membersDetails.adminAccount);
          //console.log('Display Name = ' + this.membersDetails.displayName);
          //console.log('First name = ' + this.membersDetails.firstName);

        });
        
    }

}
