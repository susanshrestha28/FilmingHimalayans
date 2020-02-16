import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MardiPage } from './mardi.page';

const routes: Routes = [
  {
    path: '',
    component: MardiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MardiPageRoutingModule {}
