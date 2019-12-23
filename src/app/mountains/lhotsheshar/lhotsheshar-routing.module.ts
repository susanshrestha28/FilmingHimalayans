import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LhotshesharPage } from './lhotsheshar.page';

const routes: Routes = [
  {
    path: '',
    component: LhotshesharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LhotshesharPageRoutingModule {}
