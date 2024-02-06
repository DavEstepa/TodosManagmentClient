import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ToastProviderService } from '../../shared/services/toast-provider.service';

@Component({
  selector: 'app-create-todo-item',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  template: `
<div class="container" style="">
  <div class="row" style="">
    <form class="example-form col" [formGroup]="(form)!" (ngSubmit)="createTODO($event)">
      <div class="container">
        <div class="row">
          <mat-form-field class="">
            <mat-label>Nombre de la Actividad</mat-label>
            <input matInput formControlName="activityName">
          </mat-form-field>
        </div>
        <div class="row">
        <mat-form-field class="example-full-width">
          <mat-label>Descripción</mat-label>
          <textarea matInput placeholder="Ex. 100 Main St"
          formControlName="description"></textarea>
        </mat-form-field>
        </div>
        <div class="row">
        <mat-form-field class="example-full-width">
          <mat-label>Notas</mat-label>
          <textarea matInput formControlName="notes"></textarea>
        </mat-form-field>
        </div>
        <div class="row" style="padding: 12px;">
          <button class="example-full-width" mat-raised-button color="white" type="submit"><b>Guardar</b></button>
        </div>
      </div>
    </form>
  </div>
</div>
  
  `,
  styleUrl: './create-todo-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoItemComponent {
  form?: FormGroup;
  initialState = {
    activityName: '',
    description: 'Actividad propuesta por...para tener resulta...',
    notes: ''
  }

  constructor(private formBuilder: FormBuilder,
    private toastService: ToastProviderService){
    this.form = this.formBuilder.group(this.initialState);
  }

  createTODO(event: any){
    event.preventDefault();
    console.log(this.form?.value);
    this.toastService.sendMessage({ severity: 'success', summary: 'Registro Creado', detail: 'La tarea llamada ...' });
  }
}
