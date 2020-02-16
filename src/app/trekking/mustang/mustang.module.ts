import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MustangPageRoutingModule } from './mustang-routing.module';

import { MustangPage } from './mustang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MustangPageRoutingModule
  ],
  declarations: [MustangPage]
})
export class MustangPageModule {}
