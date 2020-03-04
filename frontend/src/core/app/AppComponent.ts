import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '../common/component/AbstractComponent';
import { AnalyticsService } from '../../app/common/service/AnalyticsService';

@Component({
  selector: 'gs-root',
  templateUrl: './App.html',
  styleUrls: ['./App.scss']
})
export class AppComponent extends AbstractComponent {
  constructor(private analyticsService :  AnalyticsService) {
    super();
  }
  componentDidMount() {
    this.analyticsService.trackPageViews();
  }
}
