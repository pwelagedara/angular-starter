import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PortalService }  from './portal.service';

//https://material.angular.io/components/toolbar/overview
import { MatToolbarModule } from '@angular/material/toolbar';

//https://material.angular.io/components/menu/overview
import { MatMenuModule } from '@angular/material/menu';

//https://material.angular.io/components/button/overview
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [
  	HeaderComponent, 
  	FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class CoreModule { 
	static forRoot(): ModuleWithProviders {
		return {
		  ngModule: CoreModule,
		  providers: [
        PortalService
		  ]
		};
    }
}
