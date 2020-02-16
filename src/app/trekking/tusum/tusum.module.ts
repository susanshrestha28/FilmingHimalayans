import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TusumPageRoutingModule } from './tusum-routing.module';

import { TusumPage } from './tusum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TusumPageRoutingModule
  ],
  declarations: [TusumPage]
})
export class TusumPageModule {}
