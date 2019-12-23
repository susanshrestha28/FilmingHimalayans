import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EftPageRoutingModule } from './eft-routing.module';

import { EftPage } from './eft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EftPageRoutingModule
  ],
  declarations: [EftPage]
})
export class EftPageModule {}
