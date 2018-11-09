import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var AdminLTE: any;


@Component({
  selector: 'top',
  templateUrl: './Top.html',
  styleUrls: ['./Top.scss']
})
export class TopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    AdminLTE.init();
  }
  gettingStarted() {
    this.router.navigateByUrl('/start');
  }
}
