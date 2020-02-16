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
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: L.Map;
  center: L.PointTuple;
  markergroup = [];
  marker = [];
  detailofplace:any;
  upload:any;
  downlaod:any;
  dataurl: any;
   fileTransfer:FileTransferObject;
   Names = [];
   lat = [];
   lng = [];
   height = []
   heightofp =[];
   routes =['Annapurna BaseCamp','Ghorepani PoonHill Trek','Nar Phu Valley Trek','Annapurna Circuit Trek','Mustang Trek','Mardi Himal Trek'];
   Name0 = ["Pokhara","Birethati","Ulleri","Ghorepani","TaatoPani","Chhomrong","Dovan","MBC","ABC","Bamboo","JhinuDanda"]
   lat0 =["28.2096","28.3095","28.356831","28.402594","28.396365","28.418320","28.469869","28.526566","28.530748","28.457049","28.409766"]
   lng0 = [" 83.9856","83.7752","83.735433","83.700027","83.765345","83.818345","83.869642","83.907798","83.877941","83.856854","83.823881"]
   Name1 =  ["Pokhara","Nayapul","Tikhedhunga","Ghorepani","Tadapani","Ghandruk"];
   lat1 = ["28.2096","28.297426","28.349148","28.402473","28.396259","28.378611"];
   lng1 = ["83.9856","83.767488","83.742203","83.69992","83.765447","83.807852"];
   Name2 = ["Pokhara","chamje","dharapani","koto","meta","phu village","mahendra pul/narphedi","nar village","kang la phedi","kang la pass","nawal","manang","yak kharka","Phedi","Thoroung La Pass","Muktinath","Jomsom"]
   lat2 =["28.2096","28.437976","28.518902","28.654923","28.654923","84.236748","28.669209","28.681096","28.688449","28.671885","28.649159","28.664072","28.777129","28.777129","28.793378","28.817882","28.785658"]  
  lng2 =["83.9856","84.389075","84.358499","84.236748","84.236748","84.273537","84.229576","84.198339","84.12423","84.110277","84.101887","84.025562","83.972797","83.972797","83.938766","83.872633","83.734531"]
  Name3 = ["Beshisahar","Bulbule","Jagat","Dharapani","Chame","Pisang","Manang","Yak Kharka","Thorang Phedi","Thorang La","Muktinath","Jomsom","Kalopani","Tatopani","Ghorepani","Tadapani","Ghandruk","Pokhara"];
  lat3 = ["28.231186","28.287079","28.414149","28.519154","28.550874","28.612899","28.664072","28.777129","28.777129","28.793378","28.817882","28.785658","28.64198","28.498974","28.402473","28.396259","28.378611","28.2096"];
  lng3 = ["84.377403","84.372178","84.406189","84.358435","84.243486","84.15022","84.025562","83.972797","83.972797","83.938766","83.872633","83.734531","83.598458","83.654457","83.69992","83.765447","83.807852","83.9856"];
  Name4 = ["Pokhara","Jomsom","Kagbeni","Tsaile","Syangmochen","Tsarang","Lo-Manthang","Jhoser","Jomsom again"]
  lat4 = ["28.2096","28.785658","28.836913","28.937475","28.991076","29.091361","29.182435","29.230823","28.785658"]
  lng4 = ["83.9856","83.734531","83.782366","83.807825","83.838644","83.931556","83.956436","83.977743","83.734531"]
 // height4 = ["884m","2720m","2800m","3100m","3800m","3560m","3840m","4784m","2710m"]
Name5 =["Pokhara","Deurali","Forestcamp","Low camp","High camp","Mardi himal","Siding village","Pokhara again"]
lat5 = ["28.209699","28.329873","28.383604","28.40316","28.433765","28.473614","28.384958","28.2096"]
lng5 = ["83.959518","83.829868","83.843107","83.857098","83.868352","83.926663","83.874414","83.9856"]
height5=["830m","2100m","2550m","3000m","3900m","4500m","1700m","830m"]
  region = this.routes[0];
  constructor(public geolocation:Geolocation,public firestore:AngularFireStorage,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser,public webview:WebView ) { }

  async ngOnInit() {
    
    
//this.initMap();
  this.routesdraw(0);  
  }
  initMap() {
    document.getElementById('details1').innerHTML = "Pokhara";
      document.getElementById('details2').innerHTML = "885m"
    this.center = [28.2096, 83.9856]; //Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 9
    });

    let mb = L.tileLayer.mbTiles(this.file.dataDirectory + 'Susan3.mbtiles', {
      minZoom: 9,
      maxZoom: 17
    }).addTo(this.map);
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/checkin.png"),
      iconUrl: require("leaflet/dist/images/checkin.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    let markerGroup = L.featureGroup();
      let marker: any = L.marker([28.3095, 83.7752]).on('click', () => {
        document.getElementById('details1').innerHTML = "Birethati ";
      document.getElementById('details2').innerHTML = "Height:1065m"
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);



      delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/homestay.png"),
      iconUrl: require("leaflet/dist/images/homestay.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    let markerGroup0 = L.featureGroup();
    let marker0: any = L.marker([28.2096, 83.9856]).on('click', () => {
      document.getElementById('details1').innerHTML = "Pokhara";
      document.getElementById('details2').innerHTML = "Height:1400m"
    })
    markerGroup0.addLayer(marker0);
    this.map.addLayer(markerGroup0);

    let markerGroup2 = L.featureGroup();
    let marker2: any = L.marker([28.356831, 83.735433]).on('click', () => {
      document.getElementById('details1').innerHTML = "Ulleri ";
      document.getElementById('details2').innerHTML = "Height:2070m"
     // document.getElementById('map').style.marginTop = '-150px';
    })
    markerGroup2.addLayer(marker2);
    this.map.addLayer(markerGroup2);

    let markerGroup3 = L.featureGroup();
    let marker3: any = L.marker([28.402594, 83.700027]).on('click', () => {
   
      document.getElementById('details1').innerHTML = "Ghorepani";
      document.getElementById('details2').innerHTML = "Height:2770m"
    })
    markerGroup3.addLayer(marker3);
    this.map.addLayer(markerGroup3);

    let markerGroup4 = L.featureGroup();
    let marker4: any = L.marker([28.396365, 83.765345]).on('click', () => {
      document.getElementById('details1').innerHTML = "TaatoPani";
      document.getElementById('details2').innerHTML = "Height:2660m"
    })
    markerGroup4.addLayer(marker4);
    this.map.addLayer(markerGroup4);

    let markerGroup5 = L.featureGroup();
    let marker5: any = L.marker([28.418320, 83.818345]).on('click', () => {
      document.getElementById('details1').innerHTML = "Chhomrong";
      document.getElementById('details2').innerHTML = "Height:2000m"
    })
    markerGroup5.addLayer(marker5);
    this.map.addLayer(markerGroup5);

    let markerGroup6 = L.featureGroup();
    let marker6: any = L.marker([28.469869, 83.869642]).on('click', () => {
      document.getElementById('details1').innerHTML = "Dovan";
      document.getElementById('details2').innerHTML = "Height:2920m"
    })
    markerGroup6.addLayer(marker6);
    this.map.addLayer(markerGroup6);

    let markerGroup7 = L.featureGroup();
    let marker7: any = L.marker([28.526566, 83.907798]).on('click', () => {
      document.getElementById('details1').innerHTML = "MBC";
      document.getElementById('details2').innerHTML = "Height:3720m"
    })
    markerGroup7.addLayer(marker7);
    this.map.addLayer(markerGroup7);

    let markerGroup8 = L.featureGroup();
    let marker8: any = L.marker([28.530748, 83.877941]).on('click', () => {
      document.getElementById('details1').innerHTML = "ABC";
      document.getElementById('details2').innerHTML = "Height:4130m"
    })
    markerGroup8.addLayer(marker8);
    this.map.addLayer(markerGroup8);

    let markerGroup9 = L.featureGroup();
    let marker9: any = L.marker([28.457049, 83.856854]).on('click', () => {
      document.getElementById('details1').innerHTML = "Bamboo";
      document.getElementById('details2').innerHTML = "Height:2300m"
    })
    markerGroup9.addLayer(marker9);
    this.map.addLayer(markerGroup9);

    let markerGroup10 = L.featureGroup();
    let marker10: any = L.marker([28.409766, 83.823881]).on('click', () => {
      document.getElementById('details1').innerHTML = "JhinuDanda";
      document.getElementById('details2').innerHTML = "Height:1400m"
    })
    markerGroup10.addLayer(marker10);
    this.map.addLayer(markerGroup10);

    
  }
  track(){
    this.geolocation.getCurrentPosition().then((resp=>{
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/own.png"),
        iconUrl: require("leaflet/dist/images/own.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });
      let lat = resp.coords.latitude;
      let lng = resp.coords.longitude;
      let markerGroupme = L.featureGroup();
    let markerme: any = L.marker([lat,lng]).on('click', () => {
      alert('Your Position');
    })
    this.map.removeLayer(markerme);
    markerGroupme.addLayer(markerme);
    this.map.addLayer(markerGroupme);
    }))
  }

  navigate(){
    document.getElementById('map').style.height ='450px'
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

async  routesdraw(val){
    console.log(val)
    this.region = this.routes[val];
    if(val === 0){
      this.Names = this.Name0;
      this.lat = this.lat0;
      this.lng = this.lng0
    }
    else if(val === 1){
this.Names = this.Name1;
this.lat = this.lat1;
this.lng = this.lng1
    }else if(val === 2){
      this.Names = this.Name2;
      this.lat = this.lat2;
      this.lng = this.lng2
    }else if(val === 3){
      this.Names = this.Name3;
      this.lat = this.lat3;
      this.lng = this.lng3;
    }else if(val === 4){
      this.Names = this.Name4;
      this.lat = this.lat4;
      this.lng = this.lng4;
    }
    else if(val === 5){
      this.Names = this.Name5;
      this.lat = this.lat5;
      this.lng = this.lng5;
      this.heightofp = this.height5;
    }
  
  

    document.getElementById('details1').innerHTML = this.Names[0];
    document.getElementById('details2').innerHTML =  this.heightofp[0];
    
console.log("i want to draw");
this.center = [this.lat[1], this.lng[1]]; //Paris

this.map = L.map('map', {
  center: this.center,
  zoom: 10
});
var imagedata = this.file.externalDataDirectory+"annapurnaregion2.mbtiles";
this.dataurl = this.webview.convertFileSrc(imagedata);
//alert(this.dataurl)
    

let mb = L.tileLayer.mbTiles(this.dataurl, {
  minZoom: 7,
  maxZoom: 17
}).addTo(this.map);
  console.log(mb)
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
          document.getElementById('details2').innerHTML =  this.heightofp[k];
    
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
     document.getElementById('details2').innerHTML =  this.heightofp[l+1];
    
     console.log(l);
     this.map.setView(new L.LatLng(this.lat[l+1],this.lng[l+1]),16)
   }else if(a === this.Names[l] && l === this.Names.length-1){
    // console.log('here')
    console.log(l)
     document.getElementById('details1').innerHTML = this.Names[0];
     document.getElementById('details2').innerHTML =  this.heightofp[0];
    
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
     document.getElementById('details2').innerHTML =  this.heightofp[this.Names.length-1];
    
     this.map.setView(new L.LatLng(this.lat[this.Names.length-1],this.lng[this.Name1.length-1]),16)
     console.log(l)
   }else if(a === this.Names[l] && l != 0){
    console.log(l)
     document.getElementById('details1').innerHTML = this.Names[l-1];
     document.getElementById('details2').innerHTML =  this.heightofp[l-1];
     this.map.setView(new L.LatLng(this.lat[l-1],this.lng[l-1]),16)
   }else if(a === undefined){
    document.getElementById('details1').innerHTML = this.Names[this.Names.length-1];
    document.getElementById('details2').innerHTML =  this.heightofp[this.Names.length-1];
    this.map.setView(new L.LatLng(this.lat[this.Names.length-1],this.lng[this.Name1.length-1]),16)
   }

  }
}

 
}
