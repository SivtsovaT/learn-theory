import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class AuthorisationComponent implements OnInit {

  @Input() login: string = '';
  @Input() password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
