import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  loggedInUser: string;
  authUser: any;
  userId: string;

  constructor(private _router: Router ) {
    firebase.initializeApp({
      apiKey: "AIzaSyC0iiHPXv-z-NMDh6fRPKL9x9iH4CKvsTU",
      authDomain: "the-collection-3127a.firebaseapp.com",
      databaseURL: "https://the-collection-3127a.firebaseio.com",
      projectId: "the-collection-3127a",
      storageBucket: "the-collection-3127a.appspot.com",
      messagingSenderId: "231268516475"
    })
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string){
    if (this.userLoggedIn) {return true}
    this._router.navigate(['']);
    return false;
  }

  //Register a new user using email and password
  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error){
        alert(`${error.message} Please try again!`)
      })
  }

  //Verifies the logged in user
  verifyUser(){
    this.authUser = firebase.auth().currentUser;
    if (this.authUser){
      alert(`Welcome ${this.authUser.mail}`);
      this.loggedInUser = this.authUser.email;
      this.userId = this.authUser.uid;
      this.userLoggedIn = true;
      this._router.navigate(['/admin']);

      //For debugging and testing
      console.log("User Id" + this.userId);
      console.log(this.authUser);
    }
  }

  //Logs a user in
  login(loginEmail: string, loginPassword: string){
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .catch(function(error){
        alert(`${error.message} Unable to login. Try again!`);
      })
  }

  //Logs a user out
  logout(){
    this.userLoggedIn = false;
    firebase.auth().signOut().then(function(){
      alert(`Logged Out`);
    }, function(error) {
        alert(`${error.message} Unable to logout. Try again!`);
    });
  }

}
