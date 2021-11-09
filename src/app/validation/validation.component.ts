import { Component} from '@angular/core';

export class User{
  constructor(public name: string,
              public email: string,
              public phone: string,
              public password: string){}
}

@Component({
  selector: 'app-validation',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
 templateUrl: './validation.component.html'
})
export class ValidationComponent {

  user: User = new User("", "", "","");
  addUser(){
    console.log(this.user);
  }
}
