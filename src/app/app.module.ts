import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileTransferObject,FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import * as firebase from 'firebase/app';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import {fireconfig} from '../app/app.firebase.config'
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { ParallaxHeaderDirective } from './directives/parallax-header.directive';
firebase.initializeApp(fireconfig);
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [BrowserModule,AngularFireDatabaseModule,AngularFireModule.initializeApp(fireconfig),AngularFireStorageModule,AngularFireAuthModule,IonicModule.forRoot(), LeafletModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    FileTransfer,
    File,
    FileChooser,FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
