import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annapurnatrek',
  templateUrl: './annapurnatrek.page.html',
  styleUrls: ['./annapurnatrek.page.scss'],
})
export class AnnapurnatrekPage implements OnInit {
count:any;
  constructor(public router:Router) { }

  ngOnInit() {
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
}
