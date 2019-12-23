import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KanchanjungasouthPageRoutingModule } from './kanchanjungasouth-routing.module';

import { KanchanjungasouthPage } from './kanchanjungasouth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KanchanjungasouthPageRoutingModule
  ],
  declarations: [KanchanjungasouthPage]
})
export class KanchanjungasouthPageModule {}
