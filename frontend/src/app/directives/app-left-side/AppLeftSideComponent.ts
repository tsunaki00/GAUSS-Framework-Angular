import { Component, OnInit } from '@angular/core';
import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';

@Component({
  selector: 'app-left-side',
  templateUrl: './AppLeftSide.html',
  styleUrls: ['./AppLeftSide.scss']
})
export class AppLeftSideComponent extends AbstractComponent<any> {

  constructor() {
    super();
   }

  public componentWillUnmount() {
    fontawesome.library.add(faChevronLeft, faChevronRight);
  }
}

