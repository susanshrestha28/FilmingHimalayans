import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangtangPageRoutingModule } from './langtang-routing.module';

import { LangtangPage } from './langtang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangtangPageRoutingModule
  ],
  declarations: [LangtangPage]
})
export class LangtangPageModule {}
