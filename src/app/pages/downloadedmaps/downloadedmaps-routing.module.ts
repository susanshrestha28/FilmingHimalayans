import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadedmapsPage } from './downloadedmaps.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadedmapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadedmapsPageRoutingModule {}
