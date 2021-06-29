import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss','../../../../../src/assets/css/bootstrap.min.css','../../../../../src/assets/css/font-awesome.min.css']
})
export class CategoryEditComponent implements OnInit {

	public categoryForm : Category = new Category("","","","1");

	constructor(
		public route:ActivatedRoute,
		private categoryApi : CategoryApiClientService) { 

	}

	ngOnInit(): void {

		this.route.params.subscribe((date):any =>{
			console.log(date.id)
			var category = this.categoryApi.getCategoryById(date.id);
			if(category == null){
				console.log("error ----")
				return;
			}
			
			this.categoryForm = category;

		});
	}

	doSubmit(){
		console.log(111);
	}

}
