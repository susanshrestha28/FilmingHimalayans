import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import * as fs from 'fs';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';

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
  constructor(public router:Router,public splashscreen:SplashScreen,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser) { }

  ngOnInit() {
  }
async Annapurna(){
this.router.navigate(['map']);
}
async download(){
  

  
  await this.file.createDir(this.file.dataDirectory, 'my_downloads', false).then(response => {
		console.log('Directory created');
		const transfer1: FileTransferObject = this.transfer.create();
	    transfer1.download('https://firebasestorage.googleapis.com/v0/b/marvel-treks.appspot.com/o/susan.mbtiles?alt=media&token=69aaf920-759e-4b7a-962a-0a034fa52b99',this.file.externalRootDirectory + '/my_downloads/' + 'susan3' + '.docx').then((entry) => {
	    	console.log('file download response');
	    })
	    .catch((err) =>{
	    console.log('error in file download');
	    });

	}).catch(err => {
		alert('Could not create directory "my_downloads" ');
	}); 
 
}
}
