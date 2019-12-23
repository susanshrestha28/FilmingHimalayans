import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KanchanjungaPageRoutingModule } from './kanchanjunga-routing.module';

import { KanchanjungaPage } from './kanchanjunga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KanchanjungaPageRoutingModule
  ],
  declarations: [KanchanjungaPage]
})
export class KanchanjungaPageModule {}
