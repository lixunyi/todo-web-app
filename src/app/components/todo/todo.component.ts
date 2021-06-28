import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  	public todolist: Todo[] = [];

  	constructor(public todoapi: TodoApiClientService) {
		this.todolist = todoapi.getAll();
   	}

  	ngOnInit(): void {}

}
