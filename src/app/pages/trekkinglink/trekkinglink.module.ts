import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrekkinglinkPageRoutingModule } from './trekkinglink-routing.module';

import { TrekkinglinkPage } from './trekkinglink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrekkinglinkPageRoutingModule
  ],
  declarations: [TrekkinglinkPage]
})
export class TrekkinglinkPageModule {}
