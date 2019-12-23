import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmaPage } from './ama.page';

const routes: Routes = [
  {
    path: '',
    component: AmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmaPageRoutingModule {}
