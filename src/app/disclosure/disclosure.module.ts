import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclosureRoutingModule } from './disclosure-routing.module';
import { DisclosureComponent } from './disclosure.component';


@NgModule({
  declarations: [DisclosureComponent],
  imports: [
    CommonModule,
    DisclosureRoutingModule
  ]
})
export class DisclosureModule { }
