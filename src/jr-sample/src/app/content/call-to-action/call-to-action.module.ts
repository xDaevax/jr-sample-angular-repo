import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallToActionRoutingModule } from './call-to-action-routing.module';
import { CallToActionComponent } from './landing/call-to-action.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestQuoteComponent } from './request-quote/request-quote.component';


@NgModule({
  declarations: [
    CallToActionComponent,
    RequestQuoteComponent
  ],
  imports: [
    CommonModule,
    CallToActionRoutingModule,
    SharedModule
  ]
})
export class CallToActionModule { }
