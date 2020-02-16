import { Component, OnInit } from '@angular/core';
//import {normalizeURL} from '@ionic/angular';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {Router} from '@angular/router'
import {FileChooser} from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.page.html',
  styleUrls: ['./safety.page.scss'],
})
export class SafetyPage implements OnInit {
  path1:any;
  fileTransfer:FileTransferObject;
  dataurl :any;
  dataurl1:any;
  dataurl2:any;
  dataurl3:any;
  content:any;
  constructor(public transfer:FileTransfer,public file:File,public filepath:FilePath,public fileopener:FileOpener,public filechooser:FileChooser,public webview:WebView,public router :Router ) { }

  ngOnInit() {
   
  }
Download(){
  let url = encodeURI('https://firebasestorage.googleapis.com/v0/b/sky-walkers.appspot.com/o/Skywalkers.png?alt=media&token=d8283596-3377-4226-9a4c-4c8b6f64de17');
  this.fileTransfer = this.transfer.create();
  this.fileTransfer.download(url, this.file.externalDataDirectory+"pekka.png", true).then((entry) => {
    //here logging our success downloaded file path in mobile. 
    alert('download completed: ' + entry.toURL());
  
    // open downloaded file 
    //this.downloadFile = entry.toURL();
    
    }).catch((error) => {
    //here logging an error. 
    console.log('download failed: ' + JSON.stringify(error));
    });
    
}
View(){
 this.file.readAsDataURL(this.file.externalDataDirectory,"pekka.png").then((data)=>{
   this.dataurl = data;
 })
alert(this.dataurl)

var imagedata = this.file.externalDataDirectory + "pekka.png";
this.dataurl1 = this.webview.convertFileSrc(imagedata);
alert(this.dataurl1)
this.file.readAsArrayBuffer(this.file.externalDataDirectory,"pekka.png").then((data)=>{
  this.dataurl2 = data;
})
alert(this.dataurl2)
this.file.readAsText(this.file.externalDataDirectory,"pekka.png").then((data)=>{
  this.dataurl3 = data;
})
alert(this.dataurl3)
}
back(){
  this.router.navigate(['home'])
}
}