import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from 
'@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './AppDialog.html',
  styleUrls: ['./AppDialog.scss']
})
export class AppDialogComponent implements OnInit {
  title : string;
  body : string;
  caption : string;
  buttons = [];
  isCenter = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public parameter: any,
              private dialog: MatDialog) {
    this.title = parameter.title;
    this.body = parameter.body;
    this.caption = parameter.caption;
    this.buttons = parameter.buttons;
    if (parameter.isActionButtonCenter) {
      this.isCenter = parameter.isActionButtonCenter;
    }
  }


  ngOnInit() {
  }

  onSubmit() {
    this.dialog.closeAll();
  }

}
