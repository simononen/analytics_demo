import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketpriceComponent } from './marketprice.component';

const routes: Routes = [{ path: '', component: MarketpriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketpriceRoutingModule { }
