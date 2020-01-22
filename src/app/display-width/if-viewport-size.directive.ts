import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BrowserWidthService, SCREEN_WIDTH } from './browser-width.service';

@Directive({
  selector: '[ifViewportSize]',
})
export class IfViewportSizeDirective {

  private viewPortSize;
  @Input() set ifViewportSize(value: SCREEN_WIDTH) {
    this.viewPortSize = value;
    this.showIfSizeOverlap();
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
    this.showIfSizeOverlap();
  }

  showIfSizeOverlap() {
    const val = this.viewPortSize;
    if (val === this.browserWidthService.getWindowWidth()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
