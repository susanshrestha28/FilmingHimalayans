import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapeverestPage } from './mapeverest.page';

const routes: Routes = [
  {
    path: '',
    component: MapeverestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapeverestPageRoutingModule {}
