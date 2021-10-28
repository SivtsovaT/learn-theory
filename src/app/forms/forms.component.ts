import { Component, OnInit } from '@angular/core';

export class Phone {
  constructor(public title: string,
              public price: number,
              public company: string)
 { }
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title: string = '';
  price: number = 0;
  company: string = '';

  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  addPhone(){
    this.phones.push(new Phone(this.title, this.price, this.company));
  }


  constructor() { }

  ngOnInit(): void {
  }

}
