import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
username:any;
useremail:any;
  // tslint:disable-next-line: typedef-whitespace
  constructor(public router:Router,public loadingController:LoadingController,public nativeStorage:NativeStorage,public googlePlus:GooglePlus) { }

  ngOnInit() {
  }
  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
  
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '283828026076-1r132bkkr6e1pe5qtu2hknulkuobfl7i.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
    .then(user =>{
      alert('user')
      loading.dismiss();
       this.username = user.displayName;
       this.useremail = user.email;
      this.nativeStorage.setItem('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() =>{
        alert("hello")
        this.router.navigate(['profile']);
      }, error =>{
        alert(error);
      })
      loading.dismiss();
    }, err =>{
      alert(err)
      loading.dismiss();
    });
  }
    async presentLoading(loading) {
      return await loading.present();
    }
  
}
