import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManasluPage } from './manaslu.page';

const routes: Routes = [
  {
    path: '',
    component: ManasluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManasluPageRoutingModule {}
