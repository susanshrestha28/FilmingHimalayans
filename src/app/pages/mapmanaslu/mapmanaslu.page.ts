import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import {AngularFireStorageModule, AngularFireStorage} from 'angularfire2/storage';
import * as firebase from 'firebase/app';
import {WebView} from '@ionic-native/ionic-webview/ngx';
//const fileTransfer: FileTransferObject = this.transfer.create();
import 'firebase/storage';
import "leaflet";
import "leaflet-tilelayer-mbtiles-ts"
declare var L:any;

@Component({
  selector: 'app-mapmanaslu',
  templateUrl: './mapmanaslu.page.html',
  styleUrls: ['./mapmanaslu.page.scss'],
})
export class MapmanasluPage implements OnInit {
  map: L.Map;
  center: L.PointTuple;
  dataurl:any;
  markergroup = [];
  marker = [];
  detailofplace:any;
  upload:any;
  downlaod:any;
   fileTransfer:FileTransferObject;
   Names = [];
   lat = [];
   lng = [];
   heightofp =[];
   routes =['Tsum Valley Trek',"Ganesh Himal Trek"];
   Name0 = ["Arughat","Soti Khola","Macchha Khola","Dobhan","Philim","Chumling","Chhokangparo","Nile Chule","Mu gumba","Rachen Gumba","Domje","Philim","Tatopani","Soti Khola again"]
   lat0 =["28.046332","28.134773","28.228459","28.295071","28.392826","28.47353","28.498519","28.54126","28.585761","28.510582","28.47182","28.392826","28.275557","28.134773"]
   lng0 = ["84.812522","84.854643","84.874567","84.904436","84.895735","84.96338","85.065572","85.107908","85.107908","85.081826","85.008758","84.895735","84.898546","84.854643"]
   height0=["970m","720m","930m","1070m","1570m","2386m","3031m","3361m","3700m","3240m","2460m","1570m","990m","700m"]
  // Name1 =  ["syabru bensi","lama hotel","chyamki","kyanjun gumba","kyanjin ri","kyanjin gumba again","lama hotel again","syabru bensi again"]
   //lat1 = ["28.164529","28.161285","28.210088","28.212388","28.223541","28.212388","28.161285","28.164529"];
   //lng1 = ["85.33861","85.429666","85.481755","85.566072","85.575734","85.566072","85.429666","85.33861"];
   //height1 =["1410m","2480m","3430m","3860m","4800m","3860m","2480m","1410m"]
   //Name2 = ["Nepalgunj","Talcha","Rara Lake","Nepalgunj again"]
   //lat2 =["28.099676","29.52192","29.51696","28.099676"]  
  //lng2 =["81.665883","82.145811","82.079566","81.665883"]
  //Name3 = ["Beshisahar","Bulbule","Jagat","Dharapani","Chame","Pisang","Manang","Yak Kharka","Thorang Phedi","Thorang La","Muktinath","Jomsom","Kalopani","Tatopani","Ghorepani","Tadapani","Ghandruk","Pokhara"];
  //lat3 = ["28.231186","28.287079","28.414149","28.519154","28.550874","28.612899","28.664072","28.777129","28.777129","28.793378","28.817882","28.785658","28.64198","28.498974","28.402473","28.396259","28.378611","28.2096"];
  //lng3 = ["84.377403","84.372178","84.406189","84.358435","84.243486","84.15022","84.025562","83.972797","83.972797","83.938766","83.872633","83.734531","83.598458","83.654457","83.69992","83.765447","83.807852","83.9856"];
  region = this.routes[0];
  constructor(public geolocation:Geolocation,public firestore:AngularFireStorage,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser,public webview:WebView ) { }

  ngOnInit() {
    this.routesdraw(0); 
  }
  Route1(route){
    console.log(route)
   for(var i=0;i<this.routes.length;i++){
     if(route === this.routes[i] && i === 0){
       this.map.remove();
      // this.initMap();
      this.routesdraw(i);
     }
     else if(route === this.routes[i] && i != 0){
       console.log("new route slected");
       this.map.remove();
       this.routesdraw(i);
     }
  
   }
  }

  routesdraw(val){
    console.log(val)
    this.region = this.routes[val];
    if(val === 1){
//this.Names = this.Name1;
//this.lat = this.lat1;
//this.lng = this.lng1
//this.heightofp = this.height1;
    }else if(val === 2){
      //this.Names = this.Name2;
      //this.lat = this.lat2;
      //this.lng = this.lng2
    }else if(val === 3){
      //this.Names = this.Name3;
      //this.lat = this.lat3;
      //this.lng = this.lng3;
    }else if(val === 4){
      
    }else if(val === 5){
      
    }else if(val === 0){
      this.Names = this.Name0;
      this.lat = this.lat0;
      this.lng = this.lng0
      this.heightofp = this.height0;
    }

    document.getElementById('details1').innerHTML = this.Names[0];
    document.getElementById('details2').innerHTML = this.heightofp[0];
    
console.log("i want to draw");
this.center = [this.lat[1], this.lng[1]]; //Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 10
    });
    var imagedata = this.file.externalDataDirectory+"manaslu.mbtiles";
    this.dataurl = this.webview.convertFileSrc(imagedata);
    //alert(this.dataurl)
    let mb = L.tileLayer.mbTiles(this.dataurl, {
      minZoom: 7,
      maxZoom: 17
    }).addTo(this.map);
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/homestay.png"),
      iconUrl: require("leaflet/dist/images/homestay.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    for(var j=0;j<this.Names.length;j++){
      let markerGroup = L.featureGroup();
      let marker: any = L.marker([this.lat[j], this.lng[j]]).on('click', (resp) => {
      console.log(resp.latlng.lat);
      for(var  k=0;k<this.Names.length;k++){
        if(String(resp.latlng.lat) === this.lat[k]){
          document.getElementById('details1').innerHTML = this.Names[k];
          document.getElementById('details2').innerHTML = this.heightofp[k];
        }
      }
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    }
    
var i = 10;
return i;

  }
 Next(){
   
  var a = document.getElementById('details1').innerHTML;
  console.log(a)
  for(var l=0 ;l<this.Names.length;l++){
   if(a === this.Names[l] && l != this.Names.length-1){
     document.getElementById('details1').innerHTML = this.Names[l+1];
     document.getElementById('details2').innerHTML = this.heightofp[l+1];
     console.log(l);
     this.map.setView(new L.LatLng(this.lat[l+1],this.lng[l+1]),16)
   }else if(a === this.Names[l] && l === this.Names.length-1){
    console.log(l)
     document.getElementById('details1').innerHTML = this.Names[0];
     document.getElementById('details2').innerHTML = this.heightofp[0];
     this.map.setView(new L.LatLng(this.lat[0],this.lng[0]),16)
   }
  }
   }
Previous(){
  var a = document.getElementById('details1').innerHTML;
  console.log(a)
  for(var l=0 ;l<this.Names.length;l++){
   if(a === this.Names[l] && l === 0){
     document.getElementById('details1').innerHTML = this.Names[this.Names.length-1];
     document.getElementById('details2').innerHTML = this.heightofp[this.Names.length-1];
     this.map.setView(new L.LatLng(this.lat[this.Names.length-1],this.lng[this.Names.length-1]),16)
     console.log(l)
   }else if(a === this.Names[l] && l != 0){
    console.log(l)
     document.getElementById('details1').innerHTML = this.Names[l-1];
     document.getElementById('details2').innerHTML = this.heightofp[l-1];
     this.map.setView(new L.LatLng(this.lat[l-1],this.lng[l-1]),16)
   }else if(a === undefined){
    document.getElementById('details1').innerHTML = this.Names[this.Names.length-1];
    document.getElementById('details2').innerHTML = this.heightofp[this.Names.length-1];
    this.map.setView(new L.LatLng(this.lat[this.Names.length-1],this.lng[this.Names.length-1]),16)
   }

  }
}

}
