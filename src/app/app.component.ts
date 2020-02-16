import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Platform ,ModalController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {SplashPage} from './pages/splash/splash.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url:'/home',
      icon: 'home',
    },
    {
      title: 'About',
      url:'/about',
      icon: 'clipboard',

    },
    {
      title: 'Available Maps',
      url: '/downloadedmaps',
      icon: 'map',
    },
    {
      title: 'Download Map',
      url: '/maplink',
      icon: 'download'
    },
    
   
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router,
    public modalCtrl: ModalController,
   
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#000');
      this.splashScreen.hide();
    
    });
  }
  maplink(){
    this.router.navigate(['maplink'])
  }
  home(){
    this.router.navigate(['home'])
  }
  payment(){
    this.router.navigate(['payment']);
  }
}
