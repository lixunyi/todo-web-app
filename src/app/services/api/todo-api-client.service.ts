import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoApiClientService {

  constructor() { }

  getAll(){
    var todolist:Todo[] = [];
    todolist.push(new Todo("1","デザインをいい感じにする","ヘッダーのデザインをもっといい感じに","進行中","フロントエンド"));
		todolist.push(new Todo("2","Controllerの修正","Controller名をもっといい感じに","TODO(着手前)","バックエンド"));
		todolist.push(new Todo("3","新しいDB環境の作成","タイトル通り","完了","インフラ"));
    return todolist;
  }
}
