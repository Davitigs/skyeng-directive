import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DisplayWidthModule} from './display-width/display-width.module';
import {IfViewportSizeDirective} from './display-width/if-viewport-size.directive';

import { BROWSER_BREAKPOINTS_TOKEN } from './display-width/browser-width.service'

@NgModule({
  declarations: [
    AppComponent,
    IfViewportSizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayWidthModule,
  ],
  providers: [
      { provide: BROWSER_BREAKPOINTS_TOKEN, useValue: { medium: 900, large: 1200} }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
