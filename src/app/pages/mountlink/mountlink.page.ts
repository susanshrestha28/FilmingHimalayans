import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-mountlink',
  templateUrl: './mountlink.page.html',
  styleUrls: ['./mountlink.page.scss'],
})
export class MountlinkPage implements OnInit {

  constructor(  private statusBar: StatusBar,public router:Router) { }

  ngOnInit() {
    
    this.statusBar.backgroundColorByHexString('#1d252f');
  }
lhotseshar(){
this.router.navigate(['lhotsheshar']);
}
yalung(){
  this.router.navigate(['yalung']);
}
ksouth(){
  this.router.navigate(['kanchanjungasouth']);
}

anna(){
  this.router.navigate(['annapurna']);
}
everest(){
  this.router.navigate(['everest']);
}
eft(){
  this.router.navigate(['eft']);
}
k(){
  this.router.navigate(['kanchanjunga']);
}
manaslu(){
  this.router.navigate(['manaslu']);
}
lhotse(){
  this.router.navigate(['mountlhotse']);
}
putha(){
  this.router.navigate(['putha']);
}
pumori(){
  this.router.navigate(['pumori']);
}
ganesh(){
  this.router.navigate(['ganesh']);
}
lobuche(){
  this.router.navigate(['lobuche']);
}
island(){
  this.router.navigate(['island']);
}
ama(){
  this.router.navigate(['ama']);
}
pisang(){
  this.router.navigate(['pisang']);
}
tent(){
  this.router.navigate(['tent']);
}
paldor(){
  this.router.navigate(['paldor']);
}
yala(){
  this.router.navigate(['yala']);
}


}
