import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { CategoryComponent } from './components/category/category.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { HomeComponent } from './components/home/home.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';

const routes: Routes = [
  {path: "todolist",component: TodoComponent},
  {path: "category",component: TodoComponent},
  {path: "todolist/edit",component: TodoEditComponent},
  {path: "category/edit",component: CategoryEditComponent},
  {path: "home",component: HomeComponent},
  {path: "addTodo",component: TodoAddComponent},
  {path: "**", redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
