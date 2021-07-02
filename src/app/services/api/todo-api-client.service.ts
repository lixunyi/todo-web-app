import { Injectable } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Todo,TodoForm } from 'src/app/model/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoApiClientService {
	private todolist:Todo[] = [];
	private apiUrl = "http://127.0.0.1:9090/v1/todo";
	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

  	constructor(private http: HttpClient) {
		this.todolist.push(new Todo("1","デザインをいい感じにする","ヘッダーのデザインをもっといい感じに","進行中",new Category("1","フロントエンド","front","1")));
		this.todolist.push(new Todo("2","Controllerの修正","Controller名をもっといい感じに","TODO(着手前)",new Category("2","バックエンド","back","2")));
		this.todolist.push(new Todo("3","新しいDB環境の作成","タイトル通り","完了",new Category("3","インフラ","infra","3")));
    	this.todolist.push(new Todo("4","没有分类的测试","タイトル通り","完了",new Category("0","未選択","","")));
	}

  	getAll(): Observable<Todo[]> {    	
    	return this.http.get<Todo[]>(this.apiUrl) .pipe(
			tap((todos: Todo[]) => console.log('fetched todos')),
			catchError(this.handleError<Todo[]>('getAllTodo', []))
		  );
  	}

  	getTodoById(id:String): Observable<Todo>{
		const url = `${this.apiUrl}/${id}`;
		return this.http.get<Todo>(url) .pipe(
			tap((todo: Todo) => console.log('fetched todo')),
			catchError(this.handleError<Todo>('getTodo'))
		  );
 	}

	addTodo(todo: TodoForm): Observable<TodoForm> {
		return this.http.post<TodoForm>(this.apiUrl, todo, this.httpOptions).pipe(
		  tap((newTodo: TodoForm) => console.log(`added Todo`)),
		  catchError(this.handleError<TodoForm>('addTodo'))
		);
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

	/**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
		  // TODO: better job of transforming error for user consumption
		  console.log(`${operation} failed: ${error.message}`);
	
		  // Let the app keep running by returning an empty result.
		  return of(result as T);
		};
	}
}