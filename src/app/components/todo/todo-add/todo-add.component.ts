import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Todo } from 'src/app/model/todo';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  	public categorylist: Category[] = [];
  	public todoForm : Todo = new Todo("","","","",new Category("0","未選択","",""));

	constructor(private categoryApi : CategoryApiClientService) { 
		this.categorylist = categoryApi.getAll();
	}

	ngOnInit(): void {
	}

	doSubmit(){
		console.log(111);
	}
}