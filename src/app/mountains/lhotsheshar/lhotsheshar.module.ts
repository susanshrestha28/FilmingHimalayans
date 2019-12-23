import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LhotshesharPageRoutingModule } from './lhotsheshar-routing.module';

import { LhotshesharPage } from './lhotsheshar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LhotshesharPageRoutingModule
  ],
  declarations: [LhotshesharPage]
})
export class LhotshesharPageModule {}
