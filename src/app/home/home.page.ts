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
  checkval:any;
  bestdeal:any;
  @ViewChild(IonContent,{static:false}) content: IonContent;
  scrollY: number;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slideShadows: true,
    autoplay:true
  };
  constructor(public router:Router,  private statusBar: StatusBar,private platform:Platform) {

  }
  trekkinglink(){
    this.router.navigate(['trekkinglink'])
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
  var treker1 = document.getElementById('treker1');
    console.log(event.detail.scrollTop)
  

 if(event.detail.scrollTop > 50){
   headerElement.style.height = "50px";
   headerElement.style.background = 'black';
   navdisE.style.fontSize ="0px";
   searchbar.style.opacity = "0";
   logo.style.marginTop ="-200px"
   treker.style.marginTop ="120px"
   treker1.style.marginTop ="120px"
   searchbar.style.marginTop ="-300px"
  
 }else if(event.detail.scrollTop < 50){
  headerElement.style.height = "200px";
 // headerElement.style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(44,111,201,1) 58%, rgba(32,40,51,1) 100%)';
  navdisE.style.fontSize ="24px";
  searchbar.style.opacity = "1";
  logo.style.margin ="auto"
  searchbar.style.marginTop ="auto"
  treker.style.marginTop ="50px"
  treker1.style.marginTop ="50px"
 }
}
profile(){
  this.router.navigate(['profile'])
}
best1(val){
  this.checkval =val;
  console.log('clicked')
   document.getElementById('showinfo').style.height = '400px';
   document.getElementById('showinfo').style.marginTop = '-140%';
   document.getElementById('showinfo').style.marginBottom = '15%';
  document.getElementById('maincontent').style.opacity = "0.6"
  document.getElementById('ion-header').style.opacity = "0.6"
   if(val === 1){
     this.bestdeal = "$32,000"
     document.getElementById("text1").innerHTML ="Mount Everest, the greatest challenge, is more than the famous mountain on earth. It has a unique beauty..."
   }else if(val === 2){
    this.bestdeal = "$510"
    document.getElementById("text1").innerHTML ="The Everest Base Camp is at 5364m and Kalapatthar Peak at 5545m over the ocean level. Why Everest Base... "
   }else if(val === 3){
    this.bestdeal = "$1,745"
    document.getElementById("text1").innerHTML ="Tent Peak Climbing is also known as Tharpu Chuli. It is situated in the heart of Annapurna Sanctuary at..."
   }
}
Minimize(){
  document.getElementById('maincontent').style.opacity = "1"
  document.getElementById('ion-header').style.opacity = "1"
  document.getElementById('showinfo').style.height = '0px';
  document.getElementById('showinfo').style.marginTop = '0px';
  document.getElementById('showinfo').style.marginTop = '-14%';
}
naviagteto(){
if(this.checkval === 1){
  this.router.navigate(['everest'])
}else if(this.checkval === 2){
  this.router.navigate(['everesttrek'])
}
else if(this.checkval === 3){
  this.router.navigate(['tent'])
}
}

Downloaded(){
this.router.navigate(['downloadedmaps'])
}
}
