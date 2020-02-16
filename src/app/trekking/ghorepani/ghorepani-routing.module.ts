import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhorepaniPage } from './ghorepani.page';

const routes: Routes = [
  {
    path: '',
    component: GhorepaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhorepaniPageRoutingModule {}
