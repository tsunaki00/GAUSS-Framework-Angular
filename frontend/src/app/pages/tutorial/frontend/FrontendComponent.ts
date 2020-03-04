import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { Router } from '@angular/router';

import { NgxMdService } from 'ngx-md';

import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';

@Component({
  selector: 'frontend',
  templateUrl: './Frontend.html',
  styleUrls: ['./Frontend.scss']
})
export class FrontendComponent extends AbstractComponent {
  constructor(
    private _markdown: NgxMdService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router) {
    super();
  }
  public componentWillMount() {
    window.scrollTo(0, 0);
    this._markdown.setMarkedOptions({});

  }
}
