import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiClientService {

	private categoryList:Category[] = [];
  	constructor() { 
		
		this.categoryList.push(new Category("1","フロントエンド","front","1"));
		this.categoryList.push(new Category("2","バックエンド","back","2"));
		this.categoryList.push(new Category("3","インフラ","infra","3"));
	}

	getAll(){
		return this.categoryList;
	}

	getCategoryById(id:String){

		for (let index = 0; index < this.categoryList.length; index++) {
			const todo = this.categoryList[index];
			if(todo.id == id){
				return todo;
			}
			
		}  
		return null;
 	}

	deleteCategoryById(id:String){
		for (let index = 0; index < this.categoryList.length; index++) {
			const todo = this.categoryList[index];
			if(todo.id == id){
				this.categoryList.splice(index,1);
				return true;
			}
			
		} 
		
		return false;
	}
}
