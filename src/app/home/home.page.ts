import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent,{static:false}) content: IonContent;
  scrollY: number;

  constructor(public router:Router,  private statusBar: StatusBar,private platform:Platform) {

  }
mountlink(){
 this.router.navigate(['mountlink'])
}
Chat(){
  this.router.navigate(['chat']);
}
map(){
this.router.navigate(['maplink']);
}
changeCss(event) {
  let headerElement = document.getElementById('ion-header');
  let navdisE = document.getElementById('navdis');
  var searchbar = document.getElementById('searchbar');
  var logo = document.getElementById('logo');
  var treker = document.getElementById('treker');
    console.log(event.detail.scrollTop)
  

 if(event.detail.scrollTop > 50){
   headerElement.style.height = "40px";
   navdisE.style.fontSize ="0px";
   searchbar.style.opacity = "0";
   logo.style.marginTop ="-200px"
   treker.style.marginTop ="120px"
   searchbar.style.marginTop ="-300px"
 }else if(event.detail.scrollTop < 50){
  headerElement.style.height = "200px";
  navdisE.style.fontSize ="24px";
  searchbar.style.opacity = "1";
  logo.style.margin ="auto"
  searchbar.style.marginTop ="auto"
  treker.style.marginTop ="50px"
 }
}
}
