import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RanjoPage } from './ranjo.page';

const routes: Routes = [
  {
    path: '',
    component: RanjoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RanjoPageRoutingModule {}
