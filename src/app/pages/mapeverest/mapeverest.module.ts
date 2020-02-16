import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapeverestPageRoutingModule } from './mapeverest-routing.module';

import { MapeverestPage } from './mapeverest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapeverestPageRoutingModule
  ],
  declarations: [MapeverestPage]
})
export class MapeverestPageModule {}
