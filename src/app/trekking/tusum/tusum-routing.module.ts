import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TusumPage } from './tusum.page';

const routes: Routes = [
  {
    path: '',
    component: TusumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TusumPageRoutingModule {}
