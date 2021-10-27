import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.css']
})
export class ClickCountComponent implements OnInit {
  count: number = 0;
  increase(): void {
    this.count++;
  };
  increaseCount($event: any): void {
    this.count++;
    console.log($event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
