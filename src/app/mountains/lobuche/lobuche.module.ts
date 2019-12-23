import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LobuchePageRoutingModule } from './lobuche-routing.module';

import { LobuchePage } from './lobuche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobuchePageRoutingModule
  ],
  declarations: [LobuchePage]
})
export class LobuchePageModule {}
