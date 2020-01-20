import {Directive, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {BrowserWidthService} from './browser-width.service';

@Directive({
  selector: '[ifViewportSize]',
})

export class IfViewportSizeDirective {

  viewPortSize;
  @Input() set ifViewportSize(value) {
    this.viewPortSize = value;
    const val = JSON.stringify(this.viewPortSize);
    if (val === JSON.stringify(this.browserWidthService.getWindowWidth())) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

  }

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      public browserWidthService: BrowserWidthService,
      private render: Renderer2
      ) {
    this.render.listen('window', 'resize', (e) => this.onResize(e));

  }

  onResize(e) {
    this.viewContainer.clear();
    this.browserWidthService.setWidth(e.target.innerWidth);
    const val = JSON.stringify(this.viewPortSize);
    if (val === JSON.stringify(this.browserWidthService.getWindowWidth())) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
