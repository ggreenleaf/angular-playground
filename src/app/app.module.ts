import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNgIfDirective } from './shared/directives/my-ng-if.directive';
import { SharedModule } from './shared/shared.module';
import { RequestLoaderDirective } from './shared/directives/request-loader.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
