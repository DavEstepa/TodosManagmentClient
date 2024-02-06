import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-todo-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>create-todo-item works!</p>`,
  styleUrl: './create-todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoItemComponent { }
