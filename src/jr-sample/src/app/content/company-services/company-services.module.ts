import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyServicesRoutingModule } from './company-services-routing.module';
import { CompanyServicesComponent } from './landing/company-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CompanyServicesComponent
  ],
  imports: [
    CommonModule,
    CompanyServicesRoutingModule,
    SharedModule
  ]
})
export class CompanyServicesModule { }
