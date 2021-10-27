import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  condition: boolean = true;
  stay: boolean = true;
  items = ["Tom", "Bob", "Sam", "Bill"];
  count:number = 1;
  toggle() {
    this.condition = !this.condition
  }
  changePet() {
    this.stay = !this.stay;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
