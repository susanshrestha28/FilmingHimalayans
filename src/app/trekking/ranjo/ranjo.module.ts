import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RanjoPageRoutingModule } from './ranjo-routing.module';

import { RanjoPage } from './ranjo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RanjoPageRoutingModule
  ],
  declarations: [RanjoPage]
})
export class RanjoPageModule {}
