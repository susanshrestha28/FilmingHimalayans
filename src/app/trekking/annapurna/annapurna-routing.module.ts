import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnapurnaPage } from './annapurna.page';

const routes: Routes = [
  {
    path: '',
    component: AnnapurnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnapurnaPageRoutingModule {}
