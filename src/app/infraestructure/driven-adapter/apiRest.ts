import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BudgetGateway } from 'src/app/domain/models/Budget/gateway/budget.gateway';
import { Budget } from 'src/app/domain/models/Budget/Budget';

@Injectable({
  providedIn: 'root'
})
export  class BudgetApiRestService extends BudgetGateway {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private http: HttpClient) {super();}
  getByID(id: String): Observable<Budget> {
    return this.http.get<Budget>(this._url+id).pipe(delay(2000));
  }
  getAll(): Observable<Budget[]> {
    return this.http.get<Array<Budget>>(this._url);
  }
  saveNew(_budget: Budget): Observable<void> {
    throw new Error('Method not implemented.');
  }
  
}