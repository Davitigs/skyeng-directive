import { Injectable } from '@angular/core';
import {Config} from './classes/config';

@Injectable({
  providedIn: 'root'
})
export class BrowserWidthService {


  public width: number;
  public inputParams: Config;

  constructor() {}

  setWidth(width) {
    this.width = width;
  }

  setInputParams(configs: Config)  {
    this.inputParams = configs;
  }

  getWindowWidth() {
    if (this.width < this.inputParams.medium) {
      return 'small';
    } else if (this.inputParams.medium <= this.width && this.width < this.inputParams.large) {
      return 'medium';
    } else if (this.inputParams.large <= this.width) {
      return 'large';
    }
  }
}
