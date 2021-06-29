import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  public categoryForm : Category = new Category("","","","1");
  constructor() { }

  ngOnInit(): void {
    
  }

  doSubmit(){
		console.log(111);
	}
}
