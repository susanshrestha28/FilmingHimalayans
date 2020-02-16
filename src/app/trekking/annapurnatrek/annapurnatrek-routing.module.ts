import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnapurnatrekPage } from './annapurnatrek.page';

const routes: Routes = [
  {
    path: '',
    component: AnnapurnatrekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnapurnatrekPageRoutingModule {}
