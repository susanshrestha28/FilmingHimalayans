import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TentPageRoutingModule } from './tent-routing.module';

import { TentPage } from './tent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentPageRoutingModule
  ],
  declarations: [TentPage]
})
export class TentPageModule {}
