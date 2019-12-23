import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuthaPage } from './putha.page';

const routes: Routes = [
  {
    path: '',
    component: PuthaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuthaPageRoutingModule {}
