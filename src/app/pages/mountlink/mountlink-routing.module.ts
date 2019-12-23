import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MountlinkPage } from './mountlink.page';

const routes: Routes = [
  {
    path: '',
    component: MountlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MountlinkPageRoutingModule {}
