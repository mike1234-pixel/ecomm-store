import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  mySubscription: any

  constructor(private afAuth: AngularFireAuth) {
    this.mySubscription = afAuth.authState.subscribe((user) => this.user = user)
   }

   login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
   }

   logout() {
    this.afAuth.signOut();
   }
}
