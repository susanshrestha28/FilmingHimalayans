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
  selector: 'app-mapktm',
  templateUrl: './mapktm.page.html',
  styleUrls: ['./mapktm.page.scss'],
})
export class MapktmPage implements OnInit {

  map: L.Map;
  center: L.PointTuple;
  markergroup = [];
  dataurl:any;
  marker = [];
  detailofplace:any;
  upload:any;
  markerGroupme:any;
  markerme:any;
  downlaod:any;
   fileTransfer:FileTransferObject;
   Names = [];
   lat = [];
   lng = [];
   heightofp =[];
   routes =["Map test" ];
   region = this.routes[0];
   Name0 = ["Office","check p1","Check p2"]
   lat0 =["27.725563","27.725966","27.726551"]
   lata0 = ["27.7256","27.72565","27.72570"]
   lng0 = ["85.316927","85.316117","85.315291"]
   height0 =["0","0","0"]
  
  constructor(public geolocation:Geolocation,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser,public webview:WebView ) { }

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
      this.lng = this.lng0;
      this.heightofp = this.height0;
    }

    document.getElementById('details1').innerHTML = this.Names[0];
    document.getElementById('details2').innerHTML = this.heightofp[0];
    
console.log("i want to draw");
this.center = [this.lat[1], this.lng[1]]; //Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 14
    });
   // var imagedata = this.file.externalDataDirectory+"everest.mbtiles";
    //this.dataurl = this.webview.convertFileSrc(imagedata);
    let mb = L.tileLayer.mbTiles("../../../assets/ktm.mbtiles", {
      minZoom: 7,
      maxZoom: 19
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
 track(){
 let f =1;
 setInterval(()=>{
    console.log("track")
    
    this.geolocation.getCurrentPosition().then((resp=>{
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/own.png"),
        iconUrl: require("leaflet/dist/images/own.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });
      let lat = resp.coords.latitude; 
      let lng = resp.coords.longitude;
 
      if(lat > 27.72556 &&  lat < 27.7256 && f === 1){
        alert("Ghar pugyo");
       //.remove(ininterval);
       f = 0;
      }
      if(lat > 27.7259 &&  lat < 27.72565 && f === 1){
        alert("Check point1 Pugyo");
       //.remove(ininterval);
       f = 0;
      }
      if(lat > 27.7265 &&  lat < 27.72570 && f === 1){
        alert("Uncle ko maa Pugyo");
       //.remove(ininterval);
       f = 0;
      }
    for(var i = 0;i<this.lat0.length;i++){
      if(String(lat) < this.lat0[i] &&  String(lat) > this.lata0[i]){
        f = 1;
      }
    }
  
     this.markerGroupme = L.featureGroup();
    this.markerme = L.marker([lat,lng]).on('click', () => {
      alert('Your Position');
    })
    this.markerGroupme.addLayer(this.markerme);
    this.map.addLayer(this.markerGroupme);
 //setTimeout(()=>{
  //this.remove();
  // },1000)
     
   
   
    }))

   },3000)
}
remove(){
  console.log("remove")
 // this.markerGroupme.removeLayer(this.markerme);
    this.map.removeLayer(this.markerGroupme);
}
}
