import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-tom',
  templateUrl: './hello-tom.component.html',
  styleUrls: ['./hello-tom.component.css']
})
export class HelloTomComponent implements OnInit {
  name: string = 'Tom';
  constructor() { }

  ngOnInit(): void {
  }

}
