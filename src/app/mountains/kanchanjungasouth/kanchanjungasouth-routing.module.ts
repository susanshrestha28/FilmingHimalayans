import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanchanjungasouthPage } from './kanchanjungasouth.page';

const routes: Routes = [
  {
    path: '',
    component: KanchanjungasouthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanchanjungasouthPageRoutingModule {}
