import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManasluPageRoutingModule } from './manaslu-routing.module';

import { ManasluPage } from './manaslu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManasluPageRoutingModule
  ],
  declarations: [ManasluPage]
})
export class ManasluPageModule {}
