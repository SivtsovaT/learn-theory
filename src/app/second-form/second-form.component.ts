import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string)
   {}

}

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {
  phone: Phone = new Phone('', 0, '');
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  addPhone(title: NgModel, price: NgModel, comp: NgModel) {
    console.log(title);
    console.log(price);
    console.log(comp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
