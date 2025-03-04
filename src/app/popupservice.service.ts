import { Injectable, ComponentRef, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupComponentRef: ComponentRef<PopupComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showToast(message: string): void {
    if (this.popupComponentRef) {
      this.hideToast();
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    this.popupComponentRef = factory.create(this.injector);
    this.popupComponentRef.instance.message = message;

    this.appRef.attachView(this.popupComponentRef.hostView);
    const domElem = (this.popupComponentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  hideToast(): void {
    if (this.popupComponentRef) {
      this.appRef.detachView(this.popupComponentRef.hostView);
      this.popupComponentRef.destroy();
      this.popupComponentRef = null;
    }
  }
}