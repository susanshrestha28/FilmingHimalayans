import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PumoriPageRoutingModule } from './pumori-routing.module';

import { PumoriPage } from './pumori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PumoriPageRoutingModule
  ],
  declarations: [PumoriPage]
})
export class PumoriPageModule {}
