import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot} from '@angular/router';
import * as firebase from 'firebase';
import { Member } from 'app/admin/admin-shared/member';
import { ToastrService } from 'toastr-ng2';


@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  loggedInUser: string;
  authUser: any;
  userId: string;
  providerId: string; 
  //membersDetails: Member;
  
  constructor(private _router: Router, private _ts: ToastrService) {
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
      .catch((error) =>{
        //alert(`${error.message} Please try again!`)
        this._ts.error(error.message + " Please try again!");
      })
  }

  //Verifies the logged in user
  verifyUser(){
    this.authUser = firebase.auth().currentUser;
    if (this.authUser){
      this.showSuccess("Welcome " + this.authUser.email);
      this.loggedInUser = this.authUser.email;
      this.userId = this.authUser.uid;
      this.providerId = this.authUser.providerId;
      this.userLoggedIn = true;
      this._router.navigate(['user/']);

      //For debugging and testing
      //console.log("User Id = " + this.userId);
      //console.log("Provider Id =" + this.providerId);
      //console.log(this.authUser);
    }
  }

  //Logs a user in
  login(loginEmail: string, loginPassword: string){
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      //.catch(function(error){
      //  alert(`${error.message} Unable to login. Try again!`);
      //})
      .catch((error)=>{
        this.showError(error.message + "Unable to login. Please try again");
      });

  }

  //Logs a user out
  logout(){
    this.userLoggedIn = false;
    firebase.auth().signOut().then(()=>{
      //alert(`Logged Out`);
      //this._ts.success("User Logged Out", "Login App");
      //this.showSuccess('User logged out');
    }, function(error) {
        alert(`${error.message} Unable to logout. Try again!`);
    });
  }

//Creates a new member in the database
  createMember(member: Member){
    let dbRef = firebase.database().ref('users/' + this.userId);
    let newMember = dbRef.push();
    newMember.set({
      adminAccount: member.adminAccount,
      displayName: member.displayName,
      firstName: member.firstName,
      surname: member.surname,
      twitterHandle: member.twitterHandle,
      cellNumber: member.cellNumber
    })
  }

  // createMember(member: Member){
  //   let dbRef = firebase.database().ref('users/' + this.userId);
  //   dbRef.child('adminAccount').set(member.adminAccount);
  //   dbRef.child('displayName').set(member.displayName);
  //   dbRef.child('firstName').set(member.firstName);
  //   dbRef.child('surname').set(member.surname);
  //   dbRef.child('twitterHandle').set(member.twitterHandle);
  //   dbRef.child('cellNumber').set(member.cellNumber);
  // }

  //Gets the current users details from the database
  //  getMembersDetails(){
  //    let dbRef = firebase.database().ref('/users/' + this.userId)
  //      .once('value')
  //      .then((snapshot)=> {
  //        if (snapshot.exists){
  //          let tmp = snapshot.val();
  //          let transform = Object.keys(tmp).map(key => tmp[key]);
  //          let aa = transform[0].adminAccount;
  //          let dn = transform[0].displayName;
  //          let fn = transform[0].firstName;
  //          let sn = transform[0].surname;
  //          let th = transform[0].twitterHandle;
  //          let cn = transform[0].cellNumber;
  //          this.membersDetails = new Member(aa,dn,fn,sn,th,cn);
  //         console.log(this.membersDetails);
  //        }
  //      })
  //  }

//Toastr Success Message
  showSuccess(msg: string){
   this._ts.success(msg, 'Login App');
 }

//Toastr Error Message
  showError(msg: string){
    this._ts.error(msg, 'Login App');
  }



}
