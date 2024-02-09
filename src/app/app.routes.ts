import { Routes } from '@angular/router';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { HomeComponent } from './components/home/home.component';
import { ListTodoItemsComponent } from './components/list-todo-items/list-todo-items.component';
import { CompoundRoutes, NavigationConfig } from './core/models/compound-routes.model';
import { heroDocumentPlus, heroClipboardDocumentList, heroHomeModern } from '@ng-icons/heroicons/outline';

export const COMPOUND_ROUTES = new NavigationConfig([
    {
        config: {path: "crear", pathMatch: 'full', component: CreateTodoItemComponent},
        iconName: 'heroDocumentPlus',
        icon: heroDocumentPlus
    },
    {
        config: {path: "listar", pathMatch: 'full', component: ListTodoItemsComponent},
        iconName: 'heroClipboardDocumentList',
        icon: heroClipboardDocumentList
    },
    {
        config: {path: "", pathMatch: 'full', component: HomeComponent},
        iconName: 'heroHomeModern',
        icon: heroHomeModern
    }
])