import { Component, OnInit } from '@angular/core';

class Animal {
  name: string;
  count: number;


  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;

  }

}

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  name: string = '';
  count: number = 0;
  animals: Animal[] = [
    {name: 'Cat', count: 1}
  ]
  addAnimal(name: string, count: number): void {
    if (name == null || name.trim() == '' || count == null)
      return;
    this.animals.push(new Animal(name, count));
  }

  ngOnInit(): void {
  }

}
