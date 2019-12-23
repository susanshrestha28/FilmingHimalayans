import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaldorPageRoutingModule } from './paldor-routing.module';

import { PaldorPage } from './paldor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaldorPageRoutingModule
  ],
  declarations: [PaldorPage]
})
export class PaldorPageModule {}
