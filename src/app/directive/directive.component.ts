import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  visibility: boolean = true;
  toggle() {
    this.visibility=!this.visibility;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
