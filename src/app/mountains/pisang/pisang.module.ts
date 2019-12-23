import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisangPageRoutingModule } from './pisang-routing.module';

import { PisangPage } from './pisang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisangPageRoutingModule
  ],
  declarations: [PisangPage]
})
export class PisangPageModule {}
