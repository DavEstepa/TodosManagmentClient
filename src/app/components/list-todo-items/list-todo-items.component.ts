import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ConstantProviderService } from '../../shared/services/constant-provider.service';
import { TODO } from '../../core/models/TODO.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-list-todo-items',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    CardModule
  ],
  template: `


  <p-table [columns]="cols" [value]="todos" [tableStyle]="{ 'min-width': '50rem' }"
  class="mt-10 shadow">
      <ng-template pTemplate="header" let-columns>
          <tr >
              <th *ngFor="let col of columns" class="header-cell">
                  {{ col }}
              </th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-todo>
          <tr>
              <td>
                  {{ todo.activityName}}
              </td>
              <td>
                  {{ todo.description}}
              </td>
              <td>
                  {{ todo.notes}}
              </td>
          </tr>
      </ng-template>
  </p-table>

  
  `,
  styleUrl: './list-todo-items.component.css',
})
export class ListTodoItemsComponent {
  constantsProviderService = inject(ConstantProviderService);

  cols = this.constantsProviderService.getTODOColNames();
  todos: TODO[] = [{activityName: 'Pr 1', description: 'des 1', notes: 'not1'}]
}
