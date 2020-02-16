import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EveresttrekPageRoutingModule } from './everesttrek-routing.module';

import { EveresttrekPage } from './everesttrek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EveresttrekPageRoutingModule
  ],
  declarations: [EveresttrekPage]
})
export class EveresttrekPageModule {}
