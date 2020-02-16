import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnapurnaPageRoutingModule } from './annapurna-routing.module';

import { AnnapurnaPage } from './annapurna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnapurnaPageRoutingModule
  ],
  declarations: [AnnapurnaPage]
})
export class AnnapurnaPageModule {}
