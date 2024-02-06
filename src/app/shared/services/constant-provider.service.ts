import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class ConstantProviderService {
  CONSTANTS = CONSTANTS;
  constructor() { }
  
  getApplicationName(){
    return CONSTANTS.TITLE_APP;
  }

  getTODOColNames(){
    return CONSTANTS.TODOS_COL_NAMES;
  }
}
