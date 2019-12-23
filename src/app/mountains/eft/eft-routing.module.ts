import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EftPage } from './eft.page';

const routes: Routes = [
  {
    path: '',
    component: EftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EftPageRoutingModule {}
