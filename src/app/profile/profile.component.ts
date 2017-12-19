import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Constants } from './constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private accounts: any = [];
  private tips: any = [];

  constructor(public dialog: MatDialog) {
      const constants = new Constants();
      this.accounts = constants.accounts;
      this.tips = constants.tips;
  }

  ngOnInit() {
  }

  accountDialog(index): void {
    console.log('index');
    let _account = this.accounts[index];

    let dialogRef = this.dialog.open(AccountDialog, {
      width: '500px',
      data: { account: _account }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: ", result);
      this.accounts[index] = result;
    });
  }
}


@Component({
  selector: 'acccount-dialog',
  templateUrl: './account-dialog/account-dialog.html',
  styleUrls: ['./account-dialog/account-dialog.css']
})
export class AccountDialog {

  private account: any;
  private showInfo: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<AccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.account = data.account;
    }

  onCloseClick(): void {
    this.dialogRef.close(this.data.account);
  }

  switch(): void {
    this.showInfo = !this.showInfo;
  }

  delete(): void {

  }

  ngOnDestroy() {
    this.dialogRef.close(this.data.account);
  }

  save(number, name, bank): void {
    console.log(number, name, bank);
    this.showInfo = !this.showInfo;

    let short = this.nameToShort(name);

    let account = {
      number: number,
      short: short,
      type: this.account.type,
      name: name,
      bank: bank,
      index: this.account.index
    };

    this.data.account = account;
    this.account = account;
  }

  nameToShort(name): string {
    let short = "- " + name.split(' ')[1].toUpperCase();
    return short;
  }
}

