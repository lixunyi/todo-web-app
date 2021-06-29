import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Todo } from 'src/app/model/todo';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';

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
		private todoApi : TodoApiClientService) { 

		this.categorylist = categoryApi.getAll();
	}

	ngOnInit(): void {

		this.route.params.subscribe((date):any =>{
			console.log(date.id)
			var todo = this.todoApi.getTodoById(date.id);
			if(todo == null){
				console.log("error ----")
				return;
			}
			
			this.todoForm = todo;

		});
	}

	doSubmit(){
		console.log(111);
	}

 

}
