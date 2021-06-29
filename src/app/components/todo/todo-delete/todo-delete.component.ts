import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoApiClientService } from 'src/app/services/api/todo-api-client.service';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.scss']
})
export class TodoDeleteComponent implements OnInit {

	constructor(
		public acRoute:ActivatedRoute,
		public router:Router,
		private todoApi : TodoApiClientService) { 
	}

	ngOnInit(): void {

		this.acRoute.params.subscribe((date):any =>{
			
			var result = this.todoApi.deleteTodoById(date.id);
			if(result){
				this.router.navigate(["/todolist"]);
			}else{
				//aussme go to error page
				this.router.navigate(["/home"]);
			}

		});
	}
}