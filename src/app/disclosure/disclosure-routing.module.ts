import { RouterModule, Routes } from '@angular/router';

import { DisclosureComponent } from './disclosure.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: DisclosureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisclosureRoutingModule {}
