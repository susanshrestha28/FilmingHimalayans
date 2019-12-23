import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobuchePage } from './lobuche.page';

const routes: Routes = [
  {
    path: '',
    component: LobuchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LobuchePageRoutingModule {}
