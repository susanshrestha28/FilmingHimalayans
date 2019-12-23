import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileTransferObject,FileTransfer,FileUploadOptions } from '@ionic-native/file-transfer/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import {AngularFireStorageModule, AngularFireStorage} from 'angularfire2/storage';
import * as firebase from 'firebase/app';
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
  upload:any;
  downlaod:any;
   fileTransfer:FileTransferObject;
   
     route1:true;
     route2:true;
     route3:true;
     
  
  constructor(public geolocation:Geolocation,public firestore:AngularFireStorage,public transfer:FileTransfer,public file:File,public filepath:FilePath,public filechooser:FileChooser) { }

  ngOnInit() {
   
this.initMap();
    
  }
  initMap() {
    this.center = [28.2096, 83.9856]; //Paris

    this.map = L.map('map', {
      center: this.center,
      zoom: 13
    });

    let mb = L.tileLayer.mbTiles('../../../assets/mbtiles/susan3.mbtiles', {
      minZoom: 10,
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
  Route1(event){
    if(event === undefined){
      event = false;
      console.log(event);
    }else{
      console.log(event);
    }
   
  }
 
}
