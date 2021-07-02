import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss','../../../../src/assets/css/bootstrap.min.css','../../../../src/assets/css/font-awesome.min.css']
})
export class TodoComponent implements OnInit {

  	public todolist: Todo[] = [];

  	constructor(public todoapi: TodoApiClientService,private router:Router) {
		 todoapi.getAll().subscribe(todo => this.todolist = todo);
   	}

  	ngOnInit(): void {}
	
	addTodo(){

		this.router.navigateByUrl("todo/add");
	}

	editTodo(id:String){
		console.log(id);
	}
}
