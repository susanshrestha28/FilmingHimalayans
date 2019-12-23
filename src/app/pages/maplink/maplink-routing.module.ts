import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaplinkPage } from './maplink.page';

const routes: Routes = [
  {
    path: '',
    component: MaplinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaplinkPageRoutingModule {}
