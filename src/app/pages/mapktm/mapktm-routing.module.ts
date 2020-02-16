import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapktmPage } from './mapktm.page';

const routes: Routes = [
  {
    path: '',
    component: MapktmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapktmPageRoutingModule {}
