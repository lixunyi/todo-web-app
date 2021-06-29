import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Todo } from 'src/app/model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoApiClientService {
	private todolist:Todo[] = [];
  	constructor() {
		this.todolist.push(new Todo("1","デザインをいい感じにする","ヘッダーのデザインをもっといい感じに","進行中",new Category("1","フロントエンド","front","1")));
		this.todolist.push(new Todo("2","Controllerの修正","Controller名をもっといい感じに","TODO(着手前)",new Category("2","バックエンド","back","2")));
		this.todolist.push(new Todo("3","新しいDB環境の作成","タイトル通り","完了",new Category("3","インフラ","infra","3")));
    	this.todolist.push(new Todo("4","没有分类的测试","タイトル通り","完了",new Category("0","未選択","","")));
	}

  	getAll(){    	
    	return this.todolist;
  	}

  	getTodoById(id:String){

		for (let index = 0; index < this.todolist.length; index++) {
			const todo = this.todolist[index];
			if(todo.id == id){
				return todo;
			}
			
		}  
		return null;
 	}

	deleteTodoById(id:String){
		for (let index = 0; index < this.todolist.length; index++) {
			const todo = this.todolist[index];
			if(todo.id == id){
				this.todolist.splice(index,1);
				return true;
			}
			
		} 
		
		return false;
	}
}