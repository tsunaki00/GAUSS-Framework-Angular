import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from '../../../core/common/component/AbstractComponent';

@Component({
  selector: 'app-footer',
  templateUrl: './AppFooter.html',
  styleUrls: ['./AppFooter.scss']
})
export class AppFooterComponent extends AbstractComponent {

  public hasSidebar = true;

  @Input() public sidebar: string;
  
  componentWillMount() {
    if (this.sidebar && this.sidebar == 'false') {
      this.hasSidebar = false;
    }
  }

}
