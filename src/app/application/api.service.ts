
import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Budget } from '../domain/models/Budget/Budget';
import { BudgetGateway } from '../domain/models/Budget/gateway/budget.gateway';

@Injectable({
  providedIn: 'root'
})

export class GetAlbumUseCases {
  constructor( private _budgetGateWay: BudgetGateway) {}  
  getBudgetById (id: String) : Observable <Budget> {
    //TODO: En este sitio podríamos manejar las configuraciones 
    //en cache
    return this._budgetGateWay.getByID(id);
  }
  getAllBudget() : Observable <Array<Budget>> {
    return this._budgetGateWay.getAll();
  }

}