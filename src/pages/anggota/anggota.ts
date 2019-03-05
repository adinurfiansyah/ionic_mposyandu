import { Component } from '@angular/core';
import { AlertController, MenuController, ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { EditbalitamodalPage } from '../../pages/editbalitamodal/editbalitamodal';
import { AddbalitamodalPage } from '../../pages/addbalitamodal/addbalitamodal';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the AnggotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anggota',
  templateUrl: 'anggota.html',
})
export class AnggotaPage {
  aksi: string = "profile";
  Title: any;
  sub: string;
  val: any
  alamat: any;
  posyandu: any;
  telepon: any;
  username: any
  name: any;
  name2: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad() {
    let data = this.navParams.get('data');
    let posyandu_nama = data.data[0].posyandu_nama;
    let nama = data.data[0].nama;
    console.log(nama);
    this.Title = posyandu_nama;
    this.sub = "Selamat Datang, " + nama;
    this.alamat = data.data[0].alamat;
    this.posyandu = data.data[0].posyandu_nama;
    this.telepon = "0" + data.data[0].telepon;
    this.username = data.data[0].username;
    this.val = data;
    console.log(this.name2);
  }

  doRefresh(event) {
    this.selectBalita();
    event.complete()
  }

  selectBalita() {
    let params = {
      'key': 'selectbalita',
      'id': this.val.data[0].posyandu_id
    }
    this.http.post('http://localhost/server_posyandu/manage-data.php', JSON.stringify(params), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
      .subscribe(data => {
        this.listBalita(data.body);
      }, (error => {
        console.log(error);
      }))
  }

  listBalita(data) {
    this.name = data.data
    this.name2 = data.data
  }

    addBalita() {
    this.navCtrl.push(AddbalitamodalPage, {id:this.val.data[0].posyandu_id, nama:this.val.data[0].nama});
  }

  BalitaProfile(val) {
    this.navCtrl.push(EditbalitamodalPage, { val });
  }
  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;
    let key = ev.target.value.length;
    let code = ev.target;
    console.log(key, code);
    // if the value is an empty string don't filter the items
    if (val) {
      this.name = this.name2.filter((item) => {
        return (item.nama.toLowerCase().indexOf(val.toLowerCase()) > -1) ;
      })
      if(this.name == '')
      {
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Nama Tidak di Temukan',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    }
    else {
      this.selectBalita();
    }
    console.log(this.name)

  }
}
