import { Component, OnInit } from '@angular/core';
import { UserService } from "app/admin/admin-shared/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password1: string;

  constructor(private _userSVC: UserService, private _router: Router) { }

//Logs a user in
  login(loginForm: NgForm){
    this._userSVC.login(this.email, this.password1);
    this._userSVC.verifyUser();

    //For debugging and testing
    //console.log(loginForm.form);
    //console.log('Saved: ' + JSON.stringify(loginForm.value));
  }

//Navigates to the registration form
  register(){
    this._router.navigate(['/register'])
  }

//Cancels the action and navigates to the default page
  cancel(){
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
