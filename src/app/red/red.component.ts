import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  isRed = false;
  isGreen = false;
  isActive = false;

  changeColor() {
    this.isGreen = !this.isGreen;
  }

 changeMe() {
    this.isActive = !this.isActive
 }
  constructor() { }

  ngOnInit(): void {

  }

}
