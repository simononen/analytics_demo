import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketpriceRoutingModule } from './marketprice-routing.module';
import { MarketpriceComponent } from './marketprice.component';


@NgModule({
  declarations: [MarketpriceComponent],
  imports: [
    CommonModule,
    MarketpriceRoutingModule
  ]
})
export class MarketpriceModule { }
