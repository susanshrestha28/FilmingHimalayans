import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaplinkPageRoutingModule } from './maplink-routing.module';

import { MaplinkPage } from './maplink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaplinkPageRoutingModule
  ],
  declarations: [MaplinkPage]
})
export class MaplinkPageModule {}
