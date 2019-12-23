import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaldorPage } from './paldor.page';

const routes: Routes = [
  {
    path: '',
    component: PaldorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaldorPageRoutingModule {}
