import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BudgetApiRestService } from './infraestructure/driven-adapter/apiRest';
import { BudgetGateway } from './domain/models/Budget/gateway/budget.gateway';
import { BudgetComponent } from './views/budget/budget.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: BudgetGateway, useClass: BudgetApiRestService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
