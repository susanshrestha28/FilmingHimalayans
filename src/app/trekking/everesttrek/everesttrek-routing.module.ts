import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EveresttrekPage } from './everesttrek.page';

const routes: Routes = [
  {
    path: '',
    component: EveresttrekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EveresttrekPageRoutingModule {}
