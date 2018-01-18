import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  items: Person[] = [
    new Person('a', 'b'),
    new Person('c', 'd'),
    new Person('c', 'd', true)
  ];
  first: string;
  last: string;

  constructor() { }

  removePerson(i) {
    console.log(i);
    this.items.splice(i, 1);
  }

  addPerson() {
    this.items.push(new Person(this.first, this.last));
  }
}
