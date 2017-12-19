import { Component, OnInit } from '@angular/core';

declare var chrome;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  on: boolean = true;
  onMessage: string = "Switch On";
  switchClass: string = "btn-primary";

  constructor() { }

  ngOnInit() {
  }

  switch(): void {
    console.log("CHROME: ", chrome.browserAction);
    if (this.on) { 
      chrome.browserAction.setIcon({path: "off.png"}); 
    } else { 
      chrome.browserAction.setIcon({path: "icon.png"}); 
    }

    this.on = !this.on;

    this.onMessage = this.on ? "Switch On" : "Turn Off";
    this.switchClass = this.on ? "btn-primary" : "btn-danger";
  }
}
