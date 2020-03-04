import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

//declare const ga: any;

@Injectable()
export class AnalyticsService {
  private enabled: boolean;

  public constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private location: Location, 
    private router: Router) {
    this.enabled = false;
  }

  public trackPageViews() {
    if (isPlatformBrowser(this.platformId)) {
      console.log(`Analytics : ${this.location.path()}`);
      if (this.enabled) {
        this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
        ).subscribe(() => {
  //          ga('send', {hitType: 'pageview', page: this.location.path()});
        });
      }
  
    }
  }

  public trackEvent(eventName: string) {
    if (this.enabled) {
//      ga('send', 'event', eventName);
    }
  }
}