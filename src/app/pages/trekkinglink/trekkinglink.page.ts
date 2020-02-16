import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-trekkinglink',
  templateUrl: './trekkinglink.page.html',
  styleUrls: ['./trekkinglink.page.scss'],
})
export class TrekkinglinkPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor( private statusBar: StatusBar,public router:Router) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#1d252f');
  }
  annapurna(){
    this.router.navigate(['annapurnatrek']);
    }
    ghorepani(){
      this.router.navigate(['annapurna']);
    }
    mardi(){
      this.router.navigate(['mardi']);
    }
    
    narphu(){
      this.router.navigate(['narphu']);
    }
    ABCC(){
      this.router.navigate(['abcc']);
    }
    ranjo(){
      this.router.navigate(['ranjo']);
    }
    gokyo(){
      this.router.navigate(['gokyo']);
    }
    everest(){
      this.router.navigate(['everesttrek']);
    }
    tusum(){
      this.router.navigate(['tusum']);
    }
    rol(){
      this.router.navigate(['rol']);
    }
    ganesh(){
      this.router.navigate(['ganeshtrek']);
    }
    langtang(){
      this.router.navigate(['langtang']);
    }
    mustang(){
      this.router.navigate(['mustangtrek']);
    }
    
    
    
}
