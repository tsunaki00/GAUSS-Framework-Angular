import { Component } from '@angular/core';
import { AbstractComponent } from '../../common/component/AbstractComponent';

@Component({
  selector: 'gs-admin-layout',
  styleUrls: ['./AdminLayout.scss'],
  templateUrl: './AdminLayout.html',
})
export class AdminLayoutComponent extends AbstractComponent {
  skin = '';
  constructor() {
    super();
  }

  componentWillMount() {
    this.skin = 'skin-black';
  }
}
