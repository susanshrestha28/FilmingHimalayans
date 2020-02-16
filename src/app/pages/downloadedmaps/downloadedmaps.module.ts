import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadedmapsPageRoutingModule } from './downloadedmaps-routing.module';

import { DownloadedmapsPage } from './downloadedmaps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadedmapsPageRoutingModule
  ],
  declarations: [DownloadedmapsPage]
})
export class DownloadedmapsPageModule {}
