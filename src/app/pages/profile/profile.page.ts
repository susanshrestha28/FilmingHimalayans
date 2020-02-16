import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/database';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
booking= [];
  constructor(public afauth:AngularFireAuth) { }

  ngOnInit() {
    this.afauth.authState.subscribe(auth=>{
      if(auth){
        console.log("User is loged in")
      }
      else{
        console.log("please login first")
      } 
    })
  
  }

}
