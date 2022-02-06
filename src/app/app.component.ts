import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {Firestore, collectionData, collection} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import {DocumentData} from "rxfire/firestore/interfaces";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-theory';
  version = environment.versionName;
  users$: Observable<DocumentData[]> | undefined;

  constructor(auth: Auth, firestore: Firestore) {
    /*createUserWithEmailAndPassword(auth, 'mytest@test.com', 'qwerty')
      .then(user => console.log(user))
      .catch(error => console.error(error));*/

    signInWithEmailAndPassword(auth, 'mytest@test.com', 'qwerty')
      .then(user => console.log(user))
      .then(user => collection(firestore,'users'))
      .then(users => collectionData(users))
      .then(data => this.users$ = data)
      .catch(error => console.error(error));
  }

}
