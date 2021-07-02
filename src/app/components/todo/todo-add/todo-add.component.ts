import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Todo ,TodoForm} from 'src/app/model/todo';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  	public categorylist: Category[] = [];
  	public todoForm : TodoForm = new TodoForm("","","0");
	constructor(private categoryApi : CategoryApiClientService,
				private todoApi : TodoApiClientService,
				private location: Location) { 
		this.categorylist = categoryApi.getAll();
	}

	ngOnInit(): void {
	}

	doSubmit(){
		this.todoApi.addTodo(this.todoForm).
			subscribe(todo => this.location.back());
	}
}