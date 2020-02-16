import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
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
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'booknow',
    loadChildren: () => import('./pages/booknow/booknow.module').then( m => m.BooknowPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mapmanaslu',
    loadChildren: () => import('./pages/mapmanaslu/mapmanaslu.module').then( m => m.MapmanasluPageModule)
  },
  {
    path: 'maplangtang',
    loadChildren: () => import('./pages/maplangtang/maplangtang.module').then( m => m.MaplangtangPageModule)
  },
  {
    path: 'mapeverest',
    loadChildren: () => import('./pages/mapeverest/mapeverest.module').then( m => m.MapeverestPageModule)
  },
  {
    path: 'downloadedmaps',
    loadChildren: () => import('./pages/downloadedmaps/downloadedmaps.module').then( m => m.DownloadedmapsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'safety',
    loadChildren: () => import('./pages/safety/safety.module').then( m => m.SafetyPageModule)
  },
  {
    path: 'trekkinglink',
    loadChildren: () => import('./pages/trekkinglink/trekkinglink.module').then( m => m.TrekkinglinkPageModule)
  },
  {
    path: 'annapurnatrek',
    loadChildren: () => import('./trekking/annapurna/annapurna.module').then( m => m.AnnapurnaPageModule)
  },
  {
    path: 'mardi',
    loadChildren: () => import('./trekking/mardi/mardi.module').then( m => m.MardiPageModule)
  },
  {
    path: 'narphu',
    loadChildren: () => import('./trekking/narphu/narphu.module').then( m => m.NarphuPageModule)
  },
  {
    path: 'abcc',
    loadChildren: () => import('./trekking/abcc/abcc.module').then( m => m.ABCCPageModule)
  },
  {
    path: 'ranjo',
    loadChildren: () => import('./trekking/ranjo/ranjo.module').then( m => m.RanjoPageModule)
  },
  {
    path: 'gokyo',
    loadChildren: () => import('./trekking/gokyo/gokyo.module').then( m => m.GokyoPageModule)
  },
  {
    path: 'tusum',
    loadChildren: () => import('./trekking/tusum/tusum.module').then( m => m.TusumPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./trekking/rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'ganeshtrek',
    loadChildren: () => import('./trekking/ganesh/ganesh.module').then( m => m.GaneshPageModule)
  },
  {
    path: 'langtang',
    loadChildren: () => import('./trekking/langtang/langtang.module').then( m => m.LangtangPageModule)
  },
  {
    path: 'mustangtrek',
    loadChildren: () => import('./trekking/mustang/mustang.module').then( m => m.MustangPageModule)
  },
  {
    path: 'annapurna',
    loadChildren: () => import('./trekking/annapurnatrek/annapurnatrek.module').then( m => m.AnnapurnatrekPageModule)
  },
  {
    path: 'everesttrek',
    loadChildren: () => import('./trekking/everesttrek/everesttrek.module').then( m => m.EveresttrekPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'mapdolpo',
    loadChildren: () => import('./pages/mapdolpo/mapdolpo.module').then( m => m.MapdolpoPageModule)
  },
  {
    path: 'mapktm',
    loadChildren: () => import('./pages/mapktm/mapktm.module').then( m => m.MapktmPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
