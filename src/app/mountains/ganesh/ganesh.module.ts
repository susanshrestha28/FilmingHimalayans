import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaneshPageRoutingModule } from './ganesh-routing.module';

import { GaneshPage } from './ganesh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaneshPageRoutingModule
  ],
  declarations: [GaneshPage]
})
export class GaneshPageModule {}
