import { Component, OnInit } from '@angular/core';
import { Constants } from './constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private accounts: any = [];
  private tips: any = [];

  constructor() {
      const constants = new Constants();
      this.accounts = constants.accounts;
      this.tips = constants.tips;
  }

  ngOnInit() {
  }

}
