import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public eventbus: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }
}