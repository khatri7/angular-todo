import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo one',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Todo two',
        isCompleted: true
      },
      {
        id: 3,
        title: 'Todo three',
        isCompleted: false
      }
    ]
  }

}
