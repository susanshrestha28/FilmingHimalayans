import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnapurnatrekPageRoutingModule } from './annapurnatrek-routing.module';

import { AnnapurnatrekPage } from './annapurnatrek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnapurnatrekPageRoutingModule
  ],
  declarations: [AnnapurnatrekPage]
})
export class AnnapurnatrekPageModule {}
