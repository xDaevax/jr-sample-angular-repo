import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'actions', loadChildren: () => import('./content/call-to-action/call-to-action.module').then(m => m.CallToActionModule) },
  { path: 'services', loadChildren: () => import('./content/company-services/company-services.module').then(m => m.CompanyServicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload',
    paramsInheritanceStrategy: 'emptyOnly'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
