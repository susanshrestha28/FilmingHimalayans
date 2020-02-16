import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdolpoPageRoutingModule } from './mapdolpo-routing.module';

import { MapdolpoPage } from './mapdolpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdolpoPageRoutingModule
  ],
  declarations: [MapdolpoPage]
})
export class MapdolpoPageModule {}
