import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal/portal.component';

import { routing } from './home.routing';

import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    routing
  ],
  declarations: [
  	PortalComponent
  ]
})
export class HomeModule { }
