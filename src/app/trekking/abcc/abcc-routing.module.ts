import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABCCPage } from './abcc.page';

const routes: Routes = [
  {
    path: '',
    component: ABCCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ABCCPageRoutingModule {}
