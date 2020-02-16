import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapmanasluPageRoutingModule } from './mapmanaslu-routing.module';

import { MapmanasluPage } from './mapmanaslu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapmanasluPageRoutingModule
  ],
  declarations: [MapmanasluPage]
})
export class MapmanasluPageModule {}
