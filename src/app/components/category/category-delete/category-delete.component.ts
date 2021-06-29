import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryApiClientService } from 'src/app/services/api/category-api-client.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  	constructor(
		public acRoute:ActivatedRoute,
		public router:Router,
		private categoryApi : CategoryApiClientService) { 
	}

	ngOnInit(): void {

		this.acRoute.params.subscribe((date):any =>{
		
			var result = this.categoryApi.deleteCategoryById(date.id);
			
			if(result){
				this.router.navigate(["/category"]);
			}else{
				//aussme go to error page
				this.router.navigate(["/home"]);
			}

		});
	}
}
