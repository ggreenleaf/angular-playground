import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { RequestLoaderDirective } from './directives/request-loader.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { DemoDisplayComponent } from './components/demo-display/demo-display.component';
import { AlwaysErrorDisplayComponent } from './components/always-error-display/always-error-display.component';

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
    LoadingComponent,
    ErrorComponent,
    DemoDisplayComponent,
    AlwaysErrorDisplayComponent
  ],
  entryComponents: [
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
