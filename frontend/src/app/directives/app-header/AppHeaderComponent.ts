import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/core/common/component/AbstractComponent';

@Component({
  selector: 'app-header',
  templateUrl: './AppHeader.html',
  styleUrls: ['./AppHeader.scss']
})
export class AppHeaderComponent extends AbstractComponent<any> {

  constructor() {
    super();
   }
}
