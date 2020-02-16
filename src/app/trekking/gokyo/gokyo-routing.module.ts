import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GokyoPage } from './gokyo.page';

const routes: Routes = [
  {
    path: '',
    component: GokyoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GokyoPageRoutingModule {}
