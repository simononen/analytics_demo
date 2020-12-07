import { RouterModule, Routes } from '@angular/router';

import { DistrbutionValueComponent } from './distrbution-value/distrbution-value.component';
import { DistributionComponent } from './distribution.component';
import { DistributionNumberComponent } from './distribution-number/distribution-number.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DistributionComponent },
  { path: 'number', component: DistributionNumberComponent },
  { path: 'value', component: DistrbutionValueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributionRoutingModule { }
