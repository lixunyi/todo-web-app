import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Todo } from 'src/app/model/todo';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  
	public categorylist: Category[] = [];
	public todoForm : Todo = new Todo("","","","",new Category("0","未選択","",""));

	constructor(
		public route:ActivatedRoute,
		private categoryApi : CategoryApiClientService,
		private todoApi : TodoApiClientService,
		private location: Location) { 

		this.categorylist = categoryApi.getAll();
	}

	ngOnInit(): void {
		this.getTodo();
	}

	getTodo(){
		this.route.params.subscribe((date):any =>{
			this.todoApi.getTodoById(date.id).
			subscribe(todo =>{
				console.log("todo: " + todo)
				if(todo){
					this.todoForm = todo
				}
				
			});
		});
	}

	doSubmit(){
		
	}
}
