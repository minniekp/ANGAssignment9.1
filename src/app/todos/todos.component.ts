import { Component, OnInit, Input } from '@angular/core';
import { ITodoList, ITodoModel } from '../interface/interface1';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() TodoDetail;
  
  todosList: ITodoList;
  
  constructor() { }

  ngOnInit() {
  }

}
