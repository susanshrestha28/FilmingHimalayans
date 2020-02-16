import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/user';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from "firebase/app";
import {AngularFireStorage} from "angularfire2/storage";
import 'firebase/database'
import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
users ={} as Users;
  constructor(public afdb:AngularFireDatabase,public afStorage:AngularFireStorage) { }

  ngOnInit() {
    
  }
Submitaf(user){
this.afdb.object('CheckDatas/').set(user).then(()=>{
  alert("updated Sucessfully");
});

}
}
