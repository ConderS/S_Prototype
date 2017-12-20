import { Component, OnInit } from '@angular/core';

declare var chrome;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  on: boolean = true;
  onMessage: string = "Turn Off";
  switchClass: string = "btn-danger";

  constructor() { }

  ngOnInit() {
  }

  switch(): void {
    console.log("CHROME: ", chrome.browserAction);
    if (this.on) { 
      chrome.browserAction.setIcon({path: "assets/off.png"}); 
    } else { 
      chrome.browserAction.setIcon({path: "assets/icon.png"}); 
    }

    this.on = !this.on;

    this.onMessage = this.on ? "Switch On" : "Turn Off";
    this.switchClass = this.on ? "btn-primary" : "btn-danger";
  }
}
