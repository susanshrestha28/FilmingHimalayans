import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrekkinglinkPage } from './trekkinglink.page';

const routes: Routes = [
  {
    path: '',
    component: TrekkinglinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrekkinglinkPageRoutingModule {}
