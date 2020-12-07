import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalforeignRoutingModule } from './localforeign-routing.module';
import { LocalforeignComponent } from './localforeign.component';


@NgModule({
  declarations: [LocalforeignComponent],
  imports: [
    CommonModule,
    LocalforeignRoutingModule
  ]
})
export class LocalforeignModule { }
