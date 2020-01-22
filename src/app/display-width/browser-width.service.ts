import { Inject, Injectable, InjectionToken } from '@angular/core';

export interface IConfig {
  medium: number;
  large: number;
}

export const BROWSER_BREAKPOINTS_TOKEN = new InjectionToken<IConfig>('BROWSER_BREAKPOINTS'
//     {
//   providedIn: 'root',
//   factory: () => ({
//     medium: 900,
//     large: 1200
//   })
// }
);

export enum SCREEN_WIDTH {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}


@Injectable({ providedIn: 'root' })
export class BrowserWidthService {

  public width: number;

  constructor(
      @Inject(BROWSER_BREAKPOINTS_TOKEN) private breakpoints: IConfig
  ) {}

  setWidth(width) {
    this.width = width;
  }

  getWindowWidth(): SCREEN_WIDTH {
    if (this.width < this.breakpoints.medium) {
      return SCREEN_WIDTH.SMALL;
    } else if (this.breakpoints.medium <= this.width && this.width < this.breakpoints.large) {
      return SCREEN_WIDTH.MEDIUM;
    } else if (this.breakpoints.large <= this.width) {
      return SCREEN_WIDTH.LARGE;
    }
  }
}
