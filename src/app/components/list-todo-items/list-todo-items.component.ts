import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-todo-items',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>list-todo-items works!</p>`,
  styleUrl: './list-todo-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTodoItemsComponent { }
