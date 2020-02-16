import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangtangPage } from './langtang.page';

const routes: Routes = [
  {
    path: '',
    component: LangtangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangtangPageRoutingModule {}
