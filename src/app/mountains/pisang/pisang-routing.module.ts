import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PisangPage } from './pisang.page';

const routes: Routes = [
  {
    path: '',
    component: PisangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PisangPageRoutingModule {}
