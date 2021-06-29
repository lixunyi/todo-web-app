import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CategoryComponent } from './components/category/category.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { HomeComponent } from './components/home/home.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { TodoDeleteComponent } from './components/todo/todo-delete/todo-delete.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';

const routes: Routes = [

  {path: "todolist",component: TodoComponent},
  {path: "todo/edit/:id",component: TodoEditComponent},
  {path: "todo/add",component: TodoAddComponent},
  {path: "todo/delete/:id",component: TodoDeleteComponent},

  {path: "category",component: CategoryComponent},
  {path: "category/edit/:id",component: CategoryEditComponent},
  {path: "category/add",component: CategoryAddComponent},
  {path: "category/delete/:id",component: CategoryDeleteComponent},

  {path: "home",component: HomeComponent},
  {path: "**", redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }