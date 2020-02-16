import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GokyoPageRoutingModule } from './gokyo-routing.module';

import { GokyoPage } from './gokyo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GokyoPageRoutingModule
  ],
  declarations: [GokyoPage]
})
export class GokyoPageModule {}
