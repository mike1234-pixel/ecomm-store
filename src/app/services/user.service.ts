import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  save(user: firebase.User) {
    // add user to users collection
    if (user) {
    this.firestore.collection('users').doc(user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  }
}

