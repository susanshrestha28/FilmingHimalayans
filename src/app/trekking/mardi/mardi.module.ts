import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MardiPageRoutingModule } from './mardi-routing.module';

import { MardiPage } from './mardi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MardiPageRoutingModule
  ],
  declarations: [MardiPage]
})
export class MardiPageModule {}
