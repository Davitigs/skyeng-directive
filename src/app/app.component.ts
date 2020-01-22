import { Component, OnInit} from '@angular/core';

import { BrowserWidthService } from './display-width/browser-width.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
      private browserWidthService: BrowserWidthService
  ) {
    this.browserWidthService.setWidth(window.innerWidth);
  }

  ngOnInit() {}
}
