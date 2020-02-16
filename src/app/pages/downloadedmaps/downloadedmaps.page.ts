import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {File} from '@ionic-native/file/ngx';
@Component({
  selector: 'app-downloadedmaps',
  templateUrl: './downloadedmaps.page.html',
  styleUrls: ['./downloadedmaps.page.scss'],
})
export class DownloadedmapsPage implements OnInit {
filenames = ["annapurnaregion2.mbtiles","manaslu.mbtiles","langtang.mbtiles","everest.mbtiles","dolpo.mbtiles"];
Names =["Annapurna Region","Manaslu Region","Langtang Region","Everest Region","Dolpo Region"];
count = 0;
checkresult = [];
  constructor(public router:Router,public file:File) { }

ngOnInit() {
  try{
  this.file.checkFile(this.file.externalDataDirectory,this.filenames[0]).then((result)=>{
    if(result === true){
      document.getElementById('annapurna').style.color = '#00ff00';
      this.checkresult.push("Annapurna");
    }
    else{
      document.getElementById('annapurna').style.color = '#dd3333';
    }
    })
    this.file.checkFile(this.file.externalDataDirectory,this.filenames[1]).then((result)=>{
      if(result === true){
        document.getElementById('manaslu').style.color = '#00ff00';

      }else{
        document.getElementById('annapurna').style.color = '#dd3333';
      }

      })
      this.file.checkFile(this.file.externalDataDirectory,this.filenames[2]).then((result)=>{
        if(result === true){
          document.getElementById('langtang').style.color = '#00ff00';
          this.checkresult.push("langtang");
        }else{
          document.getElementById('annapurna').style.color = '#dd3333';
        }

        })
        this.file.checkFile(this.file.externalDataDirectory,this.filenames[3]).then((result)=>{
          if(result === true){
            document.getElementById('everest').style.color = '#00ff00';
            this.checkresult.push("everest");
          }else{
            document.getElementById('annapurna').style.color = '#dd3333';
          }
          })
          this.file.checkFile(this.file.externalDataDirectory,this.filenames[4]).then((result)=>{
            if(result === true){
              document.getElementById('dolpo').style.color = '#00ff00';
              this.checkresult.push("dolpo");
            }else{
              document.getElementById('annapurna').style.color = '#dd3333';
            }
            })

          }catch(error){
            alert(error);
          }

  }
Annapurna(){
 // alert(this.checkresult.length)
   
}
Manaslu(){
  this.file.checkFile(this.file.externalDataDirectory,this.filenames[1]).then((result)=>{
    if(result === true){
     this.router.navigate[('mapmanaslu')]
    }if(result === false){
      alert('Map not Downloaded yet!!! Download by clicking on download button below')
    }
    })
}
Langtang(){
  for(var i=0;i<this.checkresult.length;i++){
    if(this.checkresult[i] === "langtang"){
      this.router.navigate(['maplangtang'])
    }
    
  }

}
Everest(){
  for(var i=0;i<this.checkresult.length;i++){
    if(this.checkresult[i] === "everest"){
     this.router.navigate[('mapeverest')]
    }
   
    }
}
Dolpo(){
  for(var i=0;i<this.checkresult.length;i++){
    if(this.checkresult[i] === "dolpo"){
     this.router.navigate[('mapdolpo')]
    }
    }
}
Download(){
  this.router.navigate(['maplink'])
}
Back(){
  this.router.navigate(['home'])
}
}
