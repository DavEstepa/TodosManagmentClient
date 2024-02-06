import { Routes } from '@angular/router';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { HomeComponent } from './components/home/home.component';
import { ListTodoItemsComponent } from './components/list-todo-items/list-todo-items.component';

export const routes: Routes = [
    {path: "crear", pathMatch: 'full', component: CreateTodoItemComponent},
    {path: "listar", pathMatch: 'full', component: ListTodoItemsComponent},
    {path: "", pathMatch: 'full', component: HomeComponent}
];
