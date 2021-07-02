import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { HomeComponent } from './components/home/home.component';

import { TodoApiClientService } from './services/api/todo-api-client.service';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { TodoDeleteComponent } from './components/todo/todo-delete/todo-delete.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoryComponent,
    CategoryEditComponent,
    TodoEditComponent,
    HomeComponent,
    TodoAddComponent,
    TodoDeleteComponent,
    CategoryDeleteComponent,
    CategoryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
