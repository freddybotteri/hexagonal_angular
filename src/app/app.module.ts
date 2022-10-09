import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BudgetApiRestService } from './infraestructure/driven-adapter/apiRest';
import { BudgetGateway } from './domain/models/Budget/gateway/budget.gateway';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: BudgetGateway, useClass: BudgetApiRestService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
