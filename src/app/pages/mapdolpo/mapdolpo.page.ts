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
  selector: 'app-mapdolpo',
  templateUrl: './mapdolpo.page.html',
  styleUrls: ['./mapdolpo.page.scss'],
})
export class MapdolpoPage implements OnInit {
  map: L.Map;
  center: L.PointTuple;
  markergroup = [];
  dataurl:any;
  marker = [];
  detailofplace:any;
  upload:any;
  downlaod:any;
   fileTransfer:FileTransferObject;
   Names = [];
   lat = [];
   lng = [];
   heightofp =[];
   routes =["Rara Lake Trek","Luxury Dolpo Trek" ];
   region = this.routes[0];
   Name0 = ["Nepalgunj","Talcha","Rara Lake","Nepalgunj Return"]
   lat0 =["28.099676","29.52192","29.51696","28.099676"]
   lng0 = ["81.665883","82.145811","82.079566","81.665883"]
   height0 =["2656m","3440m","3864m","3860m","4410m","4940m","5140m","5643m","3900m","3440m","2800m"]
   Name1 = ["Nepalgunj","Juphal Airport","Dunai","Ankhe","Sulighat","Phoksundo Lake","Phoksundo Khola","Phoksundo Bhanjyang","Kang la Pass","Shey Gompa","Namduna Gaon","Saldang","Yange gompa","Sibu","Jeng-la pass","Tokyu gaon","Dho tarap","Tarap Khola","Khanigaon","Tarakot","Dunai again","Juphal Airport Return","Nepalgunj return"]
   lat1 = ["28.099676","28.980166","28.95056","0","28.973376","29.17281","29.27837","29.145284","29.299293","29.352449","29.400689","29.424803","29.495167","29.458421","29.184068","29.161301","29.126794","29.038333","28.898358","28.880933","28.95056","28.980166","28.099676"]
   lng1 = ["81.665883","82.820821","82.895451","0","82.87439","82.937422","82.896781","82.965617","82.94579","82.965472","83.03323","83.06774","83.098569","83.046062","83.162727","83.162041","83.185387","83.126566","83.024368","82.980208","82.895451","82.0821","81.665883"]
  height1 =["2850m","2656m","3440m","4084m","4415m","4750m","5480m","4750m","4690m","5365m","4930m","5180m","3985m","4440m","2850m"]
  constructor(public geolocation:Geolocation,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser,public webview:WebView) { }

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
this.Names = this.Name1;
this.lat = this.lat1;
this.lng = this.lng1
this.heightofp = this.height1;
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
      zoom: 10
    });
    //var imagedata = this.file.externalDataDirectory+"everest.mbtiles";
    //this.dataurl = this.webview.convertFileSrc(imagedata);
    let mb = L.tileLayer.mbTiles('../../../assets/dolpo.mbtiles', {
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
