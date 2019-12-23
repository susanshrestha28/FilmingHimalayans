import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanchanjungaPage } from './kanchanjunga.page';

const routes: Routes = [
  {
    path: '',
    component: KanchanjungaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KanchanjungaPageRoutingModule {}
