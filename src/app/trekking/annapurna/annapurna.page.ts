import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {File} from "@ionic-native/file";
@Component({
  selector: 'app-annapurna',
  templateUrl: './annapurna.page.html',
  styleUrls: ['./annapurna.page.scss'],
})
export class AnnapurnaPage implements OnInit {
count:any;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  Bookcow(){
    this.router.navigate(['booknow']);
  }
  book(){
    this.count++
      console.log(this.count);
      switch(this.count){
    case 1: 
    document.getElementById('bookbtn').style.marginLeft = "60%";
    document.getElementById('close').style.marginLeft = "80%"
    break;
    
    case 2:
        window.localStorage.setItem("value","annapurna");
        this.router.navigate(['booknow']);
        this.count = 0;
        break;
      }
      
    }
    close(){
      document.getElementById('bookbtn').style.marginLeft = "92%";
        document.getElementById('close').style.marginLeft = "100%";
        this.count= 0;
       
    }
    changeCss(event) {
     
      console.log(event.detail.scrollTop)
    
     if(event.detail.scrollTop > 50){
       document.getElementById('header').style.height = "0px"
       document.getElementById('backbtn').style.opacity = "1"
       document.getElementById('ionheader').style.height = "60px"
       document.getElementById('ionheader').style.backgroundColor = "black"
      document.getElementById('headerdis').innerHTML = "Annapurna Circuit Trek"
     
     }else if(event.detail.scrollTop < 50){
      document.getElementById('header').style.height = "43%"
      document.getElementById('ionheader').style.height = "0px"
      document.getElementById('ionheader').style.backgroundColor = "black"
      document.getElementById('headerdis').innerHTML = ""
      document.getElementById('backbtn').style.opacity = "0"
      //document.getElementById('scroller').style.marginTop = "-50rem"
     }
    }
    BackBtn(){
      this.router.navigate(['trekkinglink'])
    }
    RedirectMap(){
      this.router.navigate(['map'])
    }
   checkmap(){
     File.checkFile(File.externalDataDirectory,'annapurnaregion2.mbtiles').then((result)=>{
       if(result === true){
          this.router.navigate(['map'])
       }
       if(result === false){
         alert("Please Download the map first");
         this.router.navigate(['maplink']);
       }
     })
   }
}
