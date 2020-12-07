import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributionRoutingModule } from './distribution-routing.module';
import { DistributionComponent } from './distribution.component';
import { DistrbutionValueComponent } from './distrbution-value/distrbution-value.component';
import { DistributionNumberComponent } from './distribution-number/distribution-number.component';


@NgModule({
  declarations: [DistributionComponent, DistrbutionValueComponent, DistributionNumberComponent],
  imports: [
    CommonModule,
    DistributionRoutingModule
  ]
})
export class DistributionModule { }
