import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  mySubscription: any

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {
    //this.mySubscription = afAuth.authState.subscribe((user) => this.user = user)
    this.mySubscription = afAuth.authState.subscribe((user) => {
      this.user = user;
      this.userService.save(this.user);
    })
   }

   login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    // if (this.user) {
    //   this.userService.save(this.user);
    // }

    // console.log("login running")
    // if (this.user) {
    //   console.log('running')
    //   this.userService.save(this.user)
    // }
   }

   logout() {
    this.afAuth.signOut();
   }
}
