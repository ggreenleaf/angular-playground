import { Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentFactory } from '@angular/core/src/render3';
import { LoadingComponent } from '../components/loading/loading.component';


@Directive({
  selector: '[appRequestLoader]'
})
export class RequestLoaderDirective {

  @Input() set appRequestLoader(request: Observable<any>) {
    this.createLoadingComponent();
    request.subscribe(res => {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef, { value: res })
    });
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  private createLoadingComponent() {
    // if you don't clear it will append to end 
    // maybe thats how ngFor works?
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
    this.viewContainerRef.createComponent(factory);
  }

}
