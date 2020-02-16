import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABCCPageRoutingModule } from './abcc-routing.module';

import { ABCCPage } from './abcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABCCPageRoutingModule
  ],
  declarations: [ABCCPage]
})
export class ABCCPageModule {}
