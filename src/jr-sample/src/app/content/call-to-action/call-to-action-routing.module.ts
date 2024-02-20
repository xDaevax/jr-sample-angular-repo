import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallToActionComponent } from './landing/call-to-action.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';

const routes: Routes = [
  {
    path: '', component: CallToActionComponent,
    data: {
      animation: 'landing'
    }
  },
  {
    path: 'quote', component: RequestQuoteComponent,
    data: {
      animation: 'quote'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallToActionRoutingModule { }
