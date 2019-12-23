import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PumoriPage } from './pumori.page';

const routes: Routes = [
  {
    path: '',
    component: PumoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PumoriPageRoutingModule {}
