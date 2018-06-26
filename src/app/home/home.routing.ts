import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal/portal.component';

export const routes: Routes = [
  { path: '', component: PortalComponent }, // Default Route
  { path: 'portal', component: PortalComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);