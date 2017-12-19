import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { Constants } from './constants';

@Component({
  selector: 'app-data-settings',
  templateUrl: './data-settings.component.html',
  styleUrls: ['./data-settings.component.css']
})
export class DataSettingsComponent implements OnInit {

  private levels: any = [];
  private text: any = ["Select", "Selected", "Select"];
  private btnClass: any = ["btn-primary","btn-secondary","btn-primary" ];
  private revenue: number = 7;

  constructor() {
      const constants = new Constants();
      this.levels = constants.levels;
  }

  ngOnInit() {
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
}
