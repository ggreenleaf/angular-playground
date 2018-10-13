import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplayComponent
  ],
  declarations: [
    DisplayComponent,
    MyNgIfDirective
  ]
})
export class SharedModule { }
