import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private sub=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }

  gettingData()  {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map(res=>res))
  }
  returnAsObservable()
  {
  return this.sub.asObservable();
  }
  showSpinner()
  {
  this.sub.next(true);
  console.log('teeeeeeeeeeeeeest');
  }
  hideSpinner()
  {
  this.sub.next(false);
  }
}
