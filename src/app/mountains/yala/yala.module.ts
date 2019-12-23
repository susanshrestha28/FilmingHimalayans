import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YalaPageRoutingModule } from './yala-routing.module';

import { YalaPage } from './yala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YalaPageRoutingModule
  ],
  declarations: [YalaPage]
})
export class YalaPageModule {}
