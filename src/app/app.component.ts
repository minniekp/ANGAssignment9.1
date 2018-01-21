import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { ITodoList, ITodoModel } from './interface/interface1';
import { ITodoType } from './interface/interface2';
import { TodoDropDownService } from './todo-drop-down.service';

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TodoService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  todosArray: ITodoList[] = [];
  todoType: ITodoType[] = [];

  todoModel: ITodoModel;
  todoDetail: ITodoList;
  
  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _todoService: TodoService, private _todoDropDown: TodoDropDownService) { }

  ngOnInit() {
    
    /**Define default values */
    this.todoModel = {
      firstName: '',
      lastName: '',
      email: '',
      todoType: ''
    };

    this.todoType = this._todoDropDown.getTodoType();
  }

  /**Add a Todo */
  addToDo(values) {
   
    this.todoDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      todo: values.todoType
    };
    // /**Call function from service. */
    this._todoService.addTodo(this.todoDetail);
    // Using 3rd party library to show message.
    alertify.notify('Todo Added Successfully', 'success', 3);

    this.todosArray = this._todoService.getTodo();
  }
}
