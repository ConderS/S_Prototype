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
  private currentBalance: number = 17.43;
  private pastBalance: number;
  private sentTo: string;

  private transfer: boolean = false;
  private marginTop: string = '8%';

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
      if (result == 500) {
        this.accounts.splice(index, 1);

        for(let i = 0; i < this.accounts.length; i++) {
          this.accounts[i].index = i;
        }
      } else if (result) {
        this.accounts[index] = result;
      }
    });
  }

  sendToBank() {
    let dialogRef = this.dialog.open(SendDialog, {
      width: '500px',
      data: { accounts: this.accounts }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result: ", result);

      if (result) {
        this.sentTo = `${result.type} ${result.bankNumber}`;
        this.pastBalance = this.currentBalance;
        this.marginTop = "3%";

        this.transfer = true;
        this.currentBalance = 0;

        setTimeout(() => {
            this.transfer = false;
            this.marginTop = "8%";
          }, 2500);
        }
    });
  }
}

@Component({
  selector: 'send-dialog',
  templateUrl: './send-dialog/send-dialog.html',
  styleUrls: ['./send-dialog/send-dialog.css']
})
export class SendDialog {
  private accounts: any = [];
  private selected: boolean = false;
  private bankNumber: number;
  private sendData: any = null;

  constructor(
    public dialogRef: MatDialogRef<SendDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.accounts = data.accounts;
    }

  close(): void {
    this.dialogRef.close(this.sendData);
  }

  ngOnDestroy() {
    this.close();
  }

  selectedBank(bankNumber, type): void {
    this.sendData = {
      selected: true,
      bankNumber: bankNumber,
      type: type
    }
    this.close();
  }
}




/*--------------------------*/


@Component({
  selector: 'acccount-dialog',
  templateUrl: './account-dialog/account-dialog.html',
  styleUrls: ['./account-dialog/account-dialog.css']
})
export class AccountDialog {

  private account: any;
  private showInfo: boolean = true;
  private deleteAcc: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.account = data.account;
    }

  close(): void {
    let data = this.showInfo ? this.data.account : null;
    data = this.deleteAcc ? 500 : data;

    this.dialogRef.close(data);
  }

  switch(): void {
    this.showInfo = !this.showInfo;
  }

  deleteDialog(): void {
    console.log("HEY");
    this.deleteAcc = true;

    this.close();
  }

  ngOnDestroy() {
    this.close();
  }

  save(_number, name, bank): void {
    console.log(_number, name, bank);
    this.showInfo = !this.showInfo;

    let short = this.nameToShort(name);
    let number = this.encryptNum(_number);

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

  encryptNum(number) {
    if (number.length > 3) {
      return number.slice(0, -4) + '****';
    }
    return number;
  }
}

