import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { App } from "ionic-angular";

import { KetuaPage } from '../../pages/ketua/ketua';
import { LoginPage } from '../../pages/login/login';
import { AnggotaPage } from '../../pages/anggota/anggota';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  item: any;
  private navCtrl: NavController;
  constructor(public http: HttpClient, private app: App, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.navCtrl = app.getActiveNav();
  }

  auth(username, password) {
    let data = {
      key: 'login',
      username: username,
      password: password
    }
    let loding = this.loadingCtrl.create({
      content: 'Authtentication Server...'
    })
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: 'Terdapat Masalah Pada Koneksi',
      buttons: ['Dismiss']
    });

    loding.present();
    this.http.post("http://localhost/server_posyandu/manage-data.php", JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
      .subscribe(val => {
        loding.dismiss().then(()=>{
          console.log(val.body)
          let data = val.body;
            this.roleUser(val.body);
        })
      },
      error => {
        console.log(error);
        loding.dismiss().then(() => {
          alert.present()
        })
      })
  }

  roleUser(data) {
    let gagalAlert = this.alertCtrl.create({
      title: 'Error',
      message: 'Username Atau Password Salah / User telah di non-aktifkan',
      buttons: ['Dismiss']
    });
    if(data.data == null) {
        gagalAlert.present();
    }
    else {
    if (data.data[0].role_id == "ketua") {
      this.navCtrl.setRoot(KetuaPage, { data })
    }
    else if (data.data[0].role_id == "anggota") {
      this.navCtrl.setRoot(AnggotaPage, { data })
    }
    else if (data.data[0].role_ide == "ibu") {
      this.navCtrl.setRoot(KetuaPage, { data })
    }
    }
  }

  selectKader() {
    console.log('select kader')
  }
}
