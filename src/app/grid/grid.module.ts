import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalGridComponent } from './components/local-grid/local-grid.component';
import { DevExtremeModule } from 'src/app/dev-extreme/dev-extreme.module';

@NgModule({
  imports: [
    CommonModule,
    DevExtremeModule
  ],
  exports: [
    LocalGridComponent
  ],
  declarations: [
    LocalGridComponent
  ]
})
export class GridModule { }
