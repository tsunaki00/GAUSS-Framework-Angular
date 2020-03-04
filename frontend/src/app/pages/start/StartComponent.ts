import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';


@Component({
  selector: 'Start',
  templateUrl: './Start.html',
  styleUrls: ['./Start.scss']
})
export class StartComponent extends AbstractComponent {
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router) {
      super();
  }
  public componentWillMount() {
    window.scrollTo(0, 0);

  }

  public frontTutorial() {
    this.router.navigate(['tutorial']);
  }
  public backTutorial() {
    this.router.navigate(['tutorial']);
  }

}
