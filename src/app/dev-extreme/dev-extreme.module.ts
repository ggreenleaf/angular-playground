import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxMenuModule} from 'devextreme-angular'
@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxMenuModule
  ],
  exports: [
    DxDataGridModule,
    DxMenuModule
  ],
  declarations: []
})
export class DevExtremeModule { }
