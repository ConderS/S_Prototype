import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // profile: string;
  // data: string;
  // qa: string;


  // profileClass: string = "{'color': #3498db}";
  // dataClass: string = "{'color': #3498db}";
  // qaClass: string = "{'color': #3498db}";

  constructor() { }

  ngOnInit() {
  }

  onClick(select) {
      // switch (select) {
      //     case 0: {
      //       this.profile = this.profileClass;
      //       break;
      //     }
      //     case 1: {
      //       this.data = this.dataClass;
      //       break;
      //     }
      //     case 2: {
      //       this.qa = this.qaClass;
      //       break;
      //     }
      // }
  }

}
