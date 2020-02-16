import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaneshPage } from './ganesh.page';

const routes: Routes = [
  {
    path: '',
    component: GaneshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaneshPageRoutingModule {}
