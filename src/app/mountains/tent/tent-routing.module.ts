import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentPage } from './tent.page';

const routes: Routes = [
  {
    path: '',
    component: TentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentPageRoutingModule {}
