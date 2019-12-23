import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EverestPageRoutingModule } from './everest-routing.module';

import { EverestPage } from './everest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EverestPageRoutingModule
  ],
  declarations: [EverestPage]
})
export class EverestPageModule {}
