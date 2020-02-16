import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/user';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
users ={} as Users;
dis:any;
heada:any;

  constructor(public afdb:AngularFireDatabase) { }

 async ngOnInit() {
    firebase.database().ref('/Header').once('value',(snapshot)=>{
      this.heada = snapshot.toJSON();
     this.dis = this.heada.discription
     })


    // const file: File=event.target.files[0];
      //const metaData ={'contentType':file.type};
      //const storageRef:firebase.storage.Reference=firebase.storage().ref(`/Main/`);
      //const uploadTask:firebase.storage.UploadTask=storageRef.put(file,metaData);
      //console.log("Uploading:",file.name); 
      //uploadTask.then((uploadSnapshot:firebase.storage.UploadTaskSnapshot)=>{
      //console.log("upload is complete");
      //})

      await firebase.storage().ref(`/Main/`).getDownloadURL().then(url=>{})
  }

}
