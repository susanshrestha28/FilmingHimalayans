import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EverestPage } from './everest.page';

const routes: Routes = [
  {
    path: '',
    component: EverestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EverestPageRoutingModule {}
