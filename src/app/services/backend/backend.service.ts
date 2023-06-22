import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public static url='http://localhost:3000';
  constructor() { }
 
}