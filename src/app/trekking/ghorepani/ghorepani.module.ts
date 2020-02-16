import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhorepaniPageRoutingModule } from './ghorepani-routing.module';

import { GhorepaniPage } from './ghorepani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhorepaniPageRoutingModule
  ],
  declarations: [GhorepaniPage]
})
export class GhorepaniPageModule {}
