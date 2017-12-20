import { Component, OnInit, Output, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Constants } from './constants';

@Component({
  selector: 'app-data-settings', 
  templateUrl: './data-settings.component.html',
  styleUrls: ['./data-settings.component.css']
})
export class DataSettingsComponent implements OnInit {

  private levels: any = [];
  private times: any = [];
  private timeRules: any = [[9, 11], [1, 3]];
  private wlUrls: any = ["www.facebook.com"];

  private text: any = ["Select", "Selected", "Select"];
  private btnClass: any = ["btn-primary","btn-secondary","btn-primary" ];
  private revenue: number = 7;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
      const constants = new Constants();
      this.levels = constants.levels;
      this.times = constants.times;

  }

  select(level) {
      for(var i = 0; i < this.text.length; i++) {
          this.text[i] = i == level.index ? "Selected" : "Select";
      }
      for(var i = 0; i < this.btnClass.length; i++) {
          this.btnClass[i] = i == level.index ? "btn-secondary" : "btn-primary";
      }

      switch(level.title) {
        case "High": {
          this.revenue = 10;
          break;
        }
        case "Medium": {
          this.revenue = 7;
          break;
        }
        case "Low": {
          this.revenue = 4;
          break;
        }
      }
      return level.isActive = !level.isActive;
  } 

  openWLDialog() {
    let dialogRef = this.dialog.open(WhitelistDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: ", result);

      if (result) {
        this.wlUrls.push(result);
      }
    })
  }

  popWLUrl(url) {
    let index = this.wlUrls.indexOf(url);
    this.wlUrls.splice(index, 1);
  }

  addRule(amTime, pmTime) {
    this.timeRules.push([amTime, pmTime]);
  }

  popTimeRule(index) {
    this.timeRules.splice(index, 1);
  }
}

@Component({
  selector: 'whitelist-dialog',
  templateUrl: './whitelist-dialog/whitelist-dialog.html',
  styleUrls: ['./whitelist-dialog/whitelist-dialog.css']
})
export class WhitelistDialog {

  private url: string = null;

  constructor(public dialogRef: MatDialogRef<WhitelistDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(): void {
    this.dialogRef.close(this.url);
  }

  addUrl(url): void {
    this.url = url;
    this.close();
  }
}