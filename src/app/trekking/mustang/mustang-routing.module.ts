import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MustangPage } from './mustang.page';

const routes: Routes = [
  {
    path: '',
    component: MustangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MustangPageRoutingModule {}
