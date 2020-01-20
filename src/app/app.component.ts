import { Component, OnInit} from '@angular/core';

import { BrowserWidthService } from './display-width/browser-width.service';
import {Config} from './display-width/classes/config';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {


  public inputParams: Config;

  constructor(
      private browserWidthService: BrowserWidthService
  ) {
    this.browserWidthService.setWidth(window.innerWidth);
  }

  ngOnInit() {
    this.inputParams = {medium: 900, large: 1200};
    this.browserWidthService.setInputParams(this.inputParams);
  }
}
