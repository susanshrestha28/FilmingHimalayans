import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MountlinkPageRoutingModule } from './mountlink-routing.module';

import { MountlinkPage } from './mountlink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MountlinkPageRoutingModule
  ],
  declarations: [MountlinkPage]
})
export class MountlinkPageModule {}
