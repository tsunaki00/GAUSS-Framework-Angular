import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '../../../core/common/component/AbstractComponent';
import { AuthService } from '../../common/service/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './AppHeader.html',
  styleUrls: ['./AppHeader.scss']
})
export class AppHeaderComponent extends AbstractComponent {
  public mode = false;
  public account:any = { tenant : {}};
  constructor(private service:AuthService) {
    super();
  }
  public componentWillMount() {
  }
  public signout() {
    this.service.logout();
  }

  public modeToggle() {
    this.mode = !this.mode;
    let options = localStorage.getItem('options');
    if (!options) {
      options = "{}";
    }
    let option = JSON.parse(options);
    option.darkmode = this.mode;
    localStorage.setItem('options', JSON.stringify(option));
    location.reload();
  }
}
