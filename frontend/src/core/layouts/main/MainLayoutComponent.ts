import { Component } from '@angular/core';
import { AbstractComponent } from '../../common/component/AbstractComponent';
declare var jQuery:any;

@Component({
  selector: 'gs-main-layout',
  styleUrls: ['./MainLayout.scss'],
  templateUrl: './MainLayout.html',
})
export class MainLayoutComponent extends AbstractComponent {
  skin;

  constructor() {
    super();
  }

  public componentWillMount() {
    let darkmode = false;
    let options = localStorage.getItem('options');
    if (options) {
      let option = JSON.parse(options);
      darkmode = option.darkmode;
    }
    this.skin = darkmode ? 'skin-midnight' : 'skin-black';

    try {
      jQuery.AdminLTE.layout.activate();
    } catch(e) {}
  }
  
  public componentDidMount() { 
  }
}
