import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { RequestLoaderDirective } from './directives/request-loader.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { DemoDisplayComponent } from './components/demo-display/demo-display.component';
import { AlwaysErrorDisplayComponent } from './components/always-error-display/always-error-display.component';
import { LocalGridTestComponent } from './components/local-grid-test/local-grid-test.component';
import { GridModule } from '../grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    DisplayComponent,
    LocalGridTestComponent
  ],
  declarations: [
    DisplayComponent,
    MyNgIfDirective,
    RequestLoaderDirective,
    LoadingComponent,
    ErrorComponent,
    DemoDisplayComponent,
    AlwaysErrorDisplayComponent,
    LocalGridTestComponent
  ],
  entryComponents: [
    LoadingComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
