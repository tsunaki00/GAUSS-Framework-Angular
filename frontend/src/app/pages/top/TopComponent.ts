import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'top',
  templateUrl: './Top.html',
  styleUrls: ['./Top.scss']
})
export class TopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gettingStarted() {
    this.router.navigateByUrl('/start');
  }
}
