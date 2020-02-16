import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaplangtangPage } from './maplangtang.page';

const routes: Routes = [
  {
    path: '',
    component: MaplangtangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaplangtangPageRoutingModule {}
