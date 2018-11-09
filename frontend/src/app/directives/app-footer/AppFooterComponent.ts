import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';

@Component({
  selector: 'app-footer',
  templateUrl: './AppFooter.html',
  styleUrls: ['./AppFooter.scss']
})
export class AppFooterComponent extends AbstractComponent<any> {

  constructor() {
    super();
  }

}
