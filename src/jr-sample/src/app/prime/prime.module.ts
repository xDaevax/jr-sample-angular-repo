import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ToastModule,
    ProgressBarModule,
    TagModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule,
    MenuModule,
    BadgeModule,
    OverlayPanelModule,
    DataViewModule,
    ProgressSpinnerModule,
    DialogModule,
    InputTextModule,
    MultiSelectModule,
    TableModule,
    CheckboxModule,
    DynamicDialogModule,
    DropdownModule,
    TabViewModule,
    TooltipModule,
    TreeTableModule,
    KeyFilterModule,
    InputNumberModule,
    ChipModule
  ],
  providers: [
    MessageService,
    DialogService
  ]
})
export class PrimeModule { }
