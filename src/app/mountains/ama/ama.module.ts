import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmaPageRoutingModule } from './ama-routing.module';

import { AmaPage } from './ama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmaPageRoutingModule
  ],
  declarations: [AmaPage]
})
export class AmaPageModule {}
