import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { PrimeModule } from '../prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading/heading.component';

/**
 * A module that exports common UI components used throughout the application.
 */
@NgModule({
  declarations: [
    LayoutComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutComponent,
    HeadingComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
