import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AlertController} from '@ionic/angular';
import { Router } from "@angular/router";
import 'firebase/database';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {
title:any;
  constructor(public alertCtrl:AlertController,public router:Router) { }
user ={
  country:"",
  dateofa:"",
  dateofd:"",
  noofg:Number,
}
  ngOnInit() {
    let val = window.localStorage.getItem('value');
    console.log(val)
  this.title = val;
  console.log(this.title)
  }
async submit(users){
  console.log(users);
  if(users.country && users.dateofa && users.dateofd && users.noofg != null){
   
    
    await firebase.database().ref('VisitingGuests/').push(users);
    let alert = await this.alertCtrl.create({
      header:"Booking",
      message:"Booked Sucessfully,Now you can pay for your trip"
    })
    alert.present()
    this.router.navigate(['payment'])
  }
  else{
    let alert =await this.alertCtrl.create({
     header:"Attention",
     message:"Please fill all the inputs",
     buttons: [
      {
        text: 'Okay Doky',
        role: 'Okay',
        handler: () => {
          console.log('okay clicked');
        }
      },
    ]
    })
    alert.present();
  }
//firebase.database().ref('/VisitingGuests').push(users);
}
}