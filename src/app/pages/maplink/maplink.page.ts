import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {ResponseContentType} from '@angular/http';

import * as fs from 'fs';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import {Observable} from 'rxjs';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-maplink',
  templateUrl: './maplink.page.html',
  styleUrls: ['./maplink.page.scss'],
})
export class MaplinkPage implements OnInit {
  fileTransfer:FileTransferObject;
  value:any;
  count:any;
  progress:any;
  url:any;
  constructor(public router:Router,
	public splashscreen:SplashScreen,public http:HttpClient,
	public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser) { }

  ngOnInit() {
	  setInterval(()=>{
		  document.getElementById('progressbar').style.color ='#16A1A4';
	  },1000)
  }
async Annapurna(){
this.router.navigate(['map']);
}
async download(){
	 if(this.count === 4){
		
		 alert('Downloading Map Please Stay in Page for Few Minutes');
		
		let url = encodeURI('https://drive.google.com/open?id=1XHpeV1BWa8hF4tmJ8iccTp3bSu0rTlyV');
		this.fileTransfer = this.transfer.create();
		this.fileTransfer.download(url, this.file.externalDataDirectory+ 'annapurnaregion2.mbtiles', true).then((entry) => {
			//here logging our success downloaded file path in mobile. 
			alert('download completed: ' + entry.toURL());
		
			// open downloaded file 
			//this.downloadFile = entry.toURL();
			
		  }).catch((error) => {
			//here logging an error. 
			console.log('download failed: ' + JSON.stringify(error));
		  });
	 //this.router.navigate(['map']);
	 }else if(this.count === 3){
		alert('Downloading Map Please Stay in Page for Few Minutes');
	
		let url = encodeURI('https://drive.google.com/open?id=1HoffMwtgkdJtu3-WqfqLQ5myAAupVvEj');
		this.fileTransfer = this.transfer.create();
		this.fileTransfer.download(url, this.file.externalDataDirectory+ 'manaslu.mbtiles', true).then((entry) => {
			//here logging our success downloaded file path in mobile. 
			alert('download completed: ' + entry.toURL());
		
			// open downloaded file 
			//this.downloadFile = entry.toURL();
			
		  }).catch((error) => {
			//here logging an error. 
			console.log('download failed: ' + JSON.stringify(error));
		  });
	 }else if(this.count === 5){
		alert('Downloading Map Please Stay in Page for Few Minutes');
		
		firebase.storage().ref('langtang.mbtiles').getDownloadURL().then(result=>{
		  this.url = result;
		  console.log(this.url)
		})
		let url = encodeURI(this.url);
		this.fileTransfer = this.transfer.create();
	await	this.fileTransfer.onProgress((progressEvent) => {
		  var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
		  this.progress = perc;
		  });
	await	this.fileTransfer.download(url, this.file.externalDataDirectory+ 'langtang.mbtiles', true).then((entry) => {
			//here logging our success downloaded file path in mobile. 
			alert('download completed: ' + entry.toURL());
		
			// open downloaded file 
			//this.downloadFile = entry.toURL();
			
		  }).catch((error) => {
			//here logging an error. 
			console.log('download failed: ' + JSON.stringify(error));
		  });
	 }else if(this.count === 6){
	
		alert('Downloading Map Please Stay in Page for Few Minutes');
		firebase.storage().ref('everest.mbtiles').getDownloadURL().then(result=>{
			this.url = result;
			console.log(this.url)
		  })
		let url = encodeURI(this.url);
		this.fileTransfer = this.transfer.create();
		await	this.fileTransfer.onProgress((progressEvent) => {
			var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			this.progress = perc;
			});
	await	this.fileTransfer.download(url, this.file.externalDataDirectory+ 'everest.mbtiles', true).then((entry) => {
			//here logging our success downloaded file path in mobile. 
			alert('download completed: ' + entry.toURL());
		
			// open downloaded file 
			//this.downloadFile = entry.toURL();
			
		  }).catch((error) => {
			//here logging an error. 
			console.log('download failed: ' + JSON.stringify(error));
		  });

		  
	 }
	 else if(this.count === 1){
		
		alert('Downloading Map Please Stay in Page for Few Minutes');
		firebase.storage().ref('dolpo.mbtiles').getDownloadURL().then(result=>{
			this.url = result;
			console.log(this.url)
		  })
		let url = encodeURI(this.url);
		this.fileTransfer = this.transfer.create();
		await	this.fileTransfer.onProgress((progressEvent) => {
			var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			this.progress = perc;
			});
	await	this.fileTransfer.download(url, this.file.externalDataDirectory+ 'everest.mbtiles', true).then((entry) => {
			//here logging our success downloaded file path in mobile. 
			alert('download completed: ' + entry.toURL());
		
			// open downloaded file 
			//this.downloadFile = entry.toURL();
			
		  }).catch((error) => {
			//here logging an error. 
			console.log('download failed: ' + JSON.stringify(error));
		  });

		  
	 }	 
    // this.file.createDir(this.file.externalDataDirectory, 'my_downloads', false).then(response => {
     //alert('Directory created');
	// const transfer1: FileTransferObject = this.transfer.create();
	//	transfer1.download('https://firebasestorage.googleapis.com/v0/b/marvel-treks.appspot.com/o/susan.mbtiles?alt=media&token=69aaf920-759e-4b7a-962a-0a034fa52b99',this.file.externalDataDirectory + '/my_downloads/' + 'susan3.mbtiles' ).then((entry) => {
	//	alert('file download response');
	//	})
	//	.catch((err) =>{
	//alert('error in file download');
	//	});
	//});
	
}
select(value){
	this.count = value;
	console.log(value)
	//use switch case later
if (value === 4){
this.value = "Annapurna";
console.log(this.value);
document.getElementById('downloadbtn').style.backgroundColor = "#dd3333";
}else if (value === 3){
	this.value = "Manaslu";
	
	document.getElementById('downloadbtn').style.backgroundColor = "#dd3333";
	}
	else if (value === 5){
		this.value = "Langtang";
		
		document.getElementById('downloadbtn').style.backgroundColor = "#dd3333";
		}
    else if (value === 6){
			this.value = "Everest";
			
			document.getElementById('downloadbtn').style.backgroundColor = "#dd3333";
			}
			else if (value === 1){
				this.value = "Dolpo";
				
				document.getElementById('downloadbtn').style.backgroundColor = "#dd3333";
				}				

}
back(){
	this.router.navigate(['home']);
}
}
    //this.http.get('https://firebasestorage.googleapis.com/v0/b/marvel-treks.appspot.com/o/susan.mbtiles?alt=media&token=69aaf920-759e-4b7a-962a-0a034fa52b99').subscribe(res=>{
	//console.log(res)
 //});
       //

 //firebase.storage().refFromURL('https://firebasestorage.googleapis.com/v0/b/marvel-treks.appspot.com/o/susan.mbtiles?alt=media&token=69aaf920-759e-4b7a-962a-0a034fa52b99').getDownloadURL().then(res=>{
 //res.pipe()	
//})
	
//	}).catch(err => {
		//alert('Could not create directory "my_downloads" ');
	//}); 
 


