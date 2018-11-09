import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';


@Component({
  selector: 'start',
  templateUrl: './Start.html',
  styleUrls: ['./Start.scss']
})
export class StartComponent extends AbstractComponent<any> {
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router) {
      super();
  }
  public componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  public frontTutorial() {
    this.router.navigateByUrl('/start');
  }
  public backTutorial() {
    this.router.navigateByUrl('/start');
  }

}
