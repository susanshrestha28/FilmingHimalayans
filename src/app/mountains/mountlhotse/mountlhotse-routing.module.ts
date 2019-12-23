import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MountlhotsePage } from './mountlhotse.page';

const routes: Routes = [
  {
    path: '',
    component: MountlhotsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MountlhotsePageRoutingModule {}
