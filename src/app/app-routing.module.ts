import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  {
    path: 'mountlink',
    loadChildren: () => import('./pages/mountlink/mountlink.module').then( m => m.MountlinkPageModule)
  },
  {
    path: 'mountlhotse',
    loadChildren: () => import('./mountains/mountlhotse/mountlhotse.module').then( m => m.MountlhotsePageModule)
  },
  {
    path: 'yalung',
    loadChildren: () => import('./mountains/yalung/yalung.module').then( m => m.YalungPageModule)
  },
  {
    path: 'kanchanjungasouth',
    loadChildren: () => import('./mountains/kanchanjungasouth/kanchanjungasouth.module').then( m => m.KanchanjungasouthPageModule)
  },
  {
    path: 'annapurna',
    loadChildren: () => import('./mountains/annapurna/annapurna.module').then( m => m.AnnapurnaPageModule)
  },
  {
    path: 'everest',
    loadChildren: () => import('./mountains/everest/everest.module').then( m => m.EverestPageModule)
  },
  {
    path: 'eft',
    loadChildren: () => import('./mountains/eft/eft.module').then( m => m.EftPageModule)
  },
  {
    path: 'kanchanjunga',
    loadChildren: () => import('./mountains/kanchanjunga/kanchanjunga.module').then( m => m.KanchanjungaPageModule)
  },
  {
    path: 'manaslu',
    loadChildren: () => import('./mountains/manaslu/manaslu.module').then( m => m.ManasluPageModule)
  },
  {
    path: 'putha',
    loadChildren: () => import('./mountains/putha/putha.module').then( m => m.PuthaPageModule)
  },
  {
    path: 'pumori',
    loadChildren: () => import('./mountains/pumori/pumori.module').then( m => m.PumoriPageModule)
  },
  {
    path: 'ganesh',
    loadChildren: () => import('./mountains/ganesh/ganesh.module').then( m => m.GaneshPageModule)
  },
  {
    path: 'lobuche',
    loadChildren: () => import('./mountains/lobuche/lobuche.module').then( m => m.LobuchePageModule)
  },
  {
    path: 'island',
    loadChildren: () => import('./mountains/island/island.module').then( m => m.IslandPageModule)
  },
  {
    path: 'ama',
    loadChildren: () => import('./mountains/ama/ama.module').then( m => m.AmaPageModule)
  },
  {
    path: 'pisang',
    loadChildren: () => import('./mountains/pisang/pisang.module').then( m => m.PisangPageModule)
  },
  {
    path: 'tent',
    loadChildren: () => import('./mountains/tent/tent.module').then( m => m.TentPageModule)
  },
  {
    path: 'paldor',
    loadChildren: () => import('./mountains/paldor/paldor.module').then( m => m.PaldorPageModule)
  },
  {
    path: 'yala',
    loadChildren: () => import('./mountains/yala/yala.module').then( m => m.YalaPageModule)
  },
  {
    path: 'lhotsheshar',
    loadChildren: () => import('./mountains/lhotsheshar/lhotsheshar.module').then( m => m.LhotshesharPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'maplink',
    loadChildren: () => import('./pages/maplink/maplink.module').then( m => m.MaplinkPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
