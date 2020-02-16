import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NarphuPageRoutingModule } from './narphu-routing.module';

import { NarphuPage } from './narphu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NarphuPageRoutingModule
  ],
  declarations: [NarphuPage]
})
export class NarphuPageModule {}
