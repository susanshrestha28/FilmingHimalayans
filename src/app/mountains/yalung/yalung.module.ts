import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YalungPageRoutingModule } from './yalung-routing.module';

import { YalungPage } from './yalung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YalungPageRoutingModule
  ],
  declarations: [YalungPage]
})
export class YalungPageModule {}
