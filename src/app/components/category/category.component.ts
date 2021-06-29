import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss','../../../../src/assets/css/bootstrap.min.css','../../../../src/assets/css/font-awesome.min.css']
})
export class CategoryComponent implements OnInit {

	public categorylist: Category[] = [];

	constructor(public categoryApi: CategoryApiClientService,private router:Router) {
		this.categorylist = categoryApi.getAll();
	}

  	ngOnInit(): void {}

	addTodo(){
		this.router.navigateByUrl("category/add");
	}

	editTodo(id:String){
		console.log(id);
	}
}