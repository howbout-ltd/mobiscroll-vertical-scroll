import { Component } from '@angular/core';
import {MbscEventcalendarView} from "@mobiscroll/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public monthViewSettings: MbscEventcalendarView = {
    calendar: {
      scroll: 'vertical',
    },
  };

  constructor() {}

}
