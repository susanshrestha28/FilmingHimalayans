import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapdolpoPage } from './mapdolpo.page';

const routes: Routes = [
  {
    path: '',
    component: MapdolpoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapdolpoPageRoutingModule {}
