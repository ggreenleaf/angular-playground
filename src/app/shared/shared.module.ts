import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { RequestLoaderDirective } from './directives/request-loader.directive';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplayComponent
  ],
  declarations: [
    DisplayComponent,
    MyNgIfDirective,
    RequestLoaderDirective,
    LoadingComponent
  ],
  entryComponents: [
    LoadingComponent
  ]
})
export class SharedModule { }
