import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/dist/types/internal/Subject';
import { takeUntil } from 'rxjs/dist/types/operators';
import { GetBudgetUseCases } from 'src/app/application/api.service';

@Component({
  providers: [],
  selector: 'app-budget-hex',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<boolean> = new Subject();
  constructor(private _getBudgetUseCase : GetBudgetUseCases) { }
  public response$: any;
  public datos: any;

  ngOnInit(): void {
    this.response$ = this._getBudgetUseCase.getBudgetById('12');
    this.response$
    .pipe(takeUntil(this.onDestroy$))
    .subscribe (
      (data: any) => {
        this.datos = data;
      }
    );
    
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }


}