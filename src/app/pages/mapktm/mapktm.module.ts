import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapktmPageRoutingModule } from './mapktm-routing.module';

import { MapktmPage } from './mapktm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapktmPageRoutingModule
  ],
  declarations: [MapktmPage]
})
export class MapktmPageModule {}
