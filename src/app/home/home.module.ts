import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {MbscEventcalendarModule, MbscEventcalendarView} from "@mobiscroll/angular";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        MbscEventcalendarModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
