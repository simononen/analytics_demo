import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalforeignComponent } from './localforeign.component';

const routes: Routes = [{ path: '', component: LocalforeignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalforeignRoutingModule { }
