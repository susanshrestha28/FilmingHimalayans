import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarphuPage } from './narphu.page';

const routes: Routes = [
  {
    path: '',
    component: NarphuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NarphuPageRoutingModule {}
