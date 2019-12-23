import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MountlhotsePageRoutingModule } from './mountlhotse-routing.module';

import { MountlhotsePage } from './mountlhotse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MountlhotsePageRoutingModule
  ],
  declarations: [MountlhotsePage]
})
export class MountlhotsePageModule {}
