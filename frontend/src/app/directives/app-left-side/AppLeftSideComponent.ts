import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

import { AbstractComponent } from '../../../core/common/component/AbstractComponent';
import { Router } from '@angular/router';
import { AppLeftSideService } from './AppLeftSideService';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-left-side',
  templateUrl: './AppLeftSide.html',
  styleUrls: ['./AppLeftSide.scss']
})
export class AppLeftSideComponent extends AbstractComponent {
  account = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service:AppLeftSideService, private router : Router) {
    super();
    this.document.body.style.backgroundColor = "#222d32";
  }

  public scope = {
    show: false,
    height : 0,
    menuItems : {}
  };

  public componentWillMount() {
    this.scope.height = window.innerHeight - 62;
    fontawesome.library.add(faChevronLeft, faChevronRight);
    this.scope.show = true;
  }

  public styleClass(path) {
    if (path) {
      return this.router.url.indexOf(path) > -1 ? "active" : "";
    } else {
      let classes = "treeview　menu-open";
      return this.router.url.indexOf(path) > -1 ? `active ${classes}` : `${classes}`;
    }
  }
  
  public isActive(path:string) {
    return this.router.url.indexOf(path) > -1;
  }

  public routerLink(path) {
    this.router.navigate([path]);
  }
}

