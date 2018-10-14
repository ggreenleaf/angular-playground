import { Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentFactory } from '@angular/core/src/render3';
import { LoadingComponent } from '../components/loading/loading.component';
import { ErrorComponent } from '../components/error/error.component';
import { createError } from '@angular/core/src/render3/instructions';


@Directive({
  selector: '[appRequestLoader]'
})
export class RequestLoaderDirective {

  @Input() set appRequestLoader(request: Observable<any>) {
    this.createLoadingComponent();
    request.subscribe(
      res => {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef, { value: res })
    },
    error => {
      console.log("in error handler");
      this.createErrorComponent(error);
    });
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }


  // we probably could combine the following two functions into one and pass the component Type and its inputs if needed
  // this would allow more control and maybe later allow custom error handling component by an input prop
  private createLoadingComponent() {
    // if you don't clear it will append to end 
    // maybe thats how ngFor works?
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
    this.viewContainerRef.createComponent(factory);
  }

  // we would type this to an error object we expect from our server
  // but for the sample i just use string
  private createErrorComponent(error: string) {
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(ErrorComponent);
    const errorComponent = this.viewContainerRef.createComponent(factory);
    errorComponent.instance.errorMessage = error;
  }

}
