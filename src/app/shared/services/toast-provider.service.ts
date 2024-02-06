import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastProviderService {
  private message = new Subject();
  public message$ = this.message.asObservable();

  constructor() { }

  sendMessage(data: any){
    this.message.next(data);
  }
}
