import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyServicesComponent } from './landing/company-services.component';

const routes: Routes = [{
  path: '', component: CompanyServicesComponent,
  data: {
    animation: 'quote'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyServicesRoutingModule { }
