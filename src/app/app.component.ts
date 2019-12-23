import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Safety',
      url:'/safety',
      icon: 'home',
    },
    {
      title: 'About',
      url:'/about',
      icon: 'clipboard',

    },
    {
      title: 'Support',
      url: '/support',
      icon: 'map',
    },
    {
      title: 'Feedback',
      url: '/register',
      icon: 'cafe '
    },
    {
      title: 'Signout',
      url: '/login',
      icon: 'cafe '
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1d252f');
      this.splashScreen.hide();
    });
  }
  maplink(){
    this.router.navigate(['maplink'])
  }
  home(){
    this.router.navigate(['home'])
  }
}
