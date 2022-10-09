import { Component, OnInit } from '@angular/core';
import { GetBudgetUseCases } from 'src/app/application/api.service';

@Component({
  providers: [],
  selector: 'app-budget-hex',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private _getBudgetUseCase : GetBudgetUseCases) { }
  public response$: any;
  public datos: any;

  ngOnInit(): void {
    this.response$ = this._getBudgetUseCase.getBudgetById('12');
    this.response$.subscribe (
      (data: any) => {
        this.datos = data;
      }
    );
    
  }

}