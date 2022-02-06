import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@angular/fire/auth";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-theory';
  version = environment.versionName;

  constructor(auth: Auth) {
   /* createUserWithEmailAndPassword(auth, 'mytest@test.com', 'qwerty')
      .then(user => console.log(user))
      .catch(error => console.error(error));*/

    signInWithEmailAndPassword(auth, 'mytest@test.com', 'qwerty')
      .then(user => console.log(user))
      .catch(error => console.error(error));
  }

}
