import {AfterContentChecked, AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {BrowserWidthService} from './display-width/browser-width.service';

interface IConfig {
  medium: number;
  large: number;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, AfterViewInit {


  public inputParams: IConfig;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.browserWidthService.setWidth(event.target.innerWidth);
  // }


  constructor(
      private browserWidthService: BrowserWidthService
  ) {
    this.browserWidthService.setWidth(window.innerWidth);
  }

  ngOnInit() {
    this.inputParams = {medium: 900, large: 1200};
    this.browserWidthService.setInputParams(this.inputParams);
  }

  ngAfterViewInit(): void {

  }
}
