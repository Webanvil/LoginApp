import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/admin/admin-shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'la-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;
  displayName: string;
  userId: string;

  constructor(private _userSVC: UserService, private _router: Router) { }

//Registers a new user
  register(registerForm: NgForm){
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else{
      this.passwordFail = false;
      this._userSVC.register(this.email, this.password1);
      this._userSVC.verifyUser();
      this.userId = this._userSVC.userId;
      //this._userSVC.createUser(this.displayName);
    }

    //For debugging and testing
    //console.log(registerForm.form);
    //console.log('Saved: ' + JSON.stringify(registerForm.value));
  }

  cancel(){
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
