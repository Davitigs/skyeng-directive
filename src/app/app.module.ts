import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DisplayWidthModule} from './display-width/display-width.module';
import {IfViewportSizeDirective} from './display-width/if-viewport-size.directive';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
