import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ViewbalitaPage } from '../../pages/viewbalita/viewbalita'
/**
 * Generated class for the EditbalitamodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editbalitamodal',
  templateUrl: 'editbalitamodal.html',
})
export class EditbalitamodalPage {
  authForm: any;
  title: any;
  nama: any;
  alamat: any;
  nama_ayah: any;
  nama_ibu: any;
  status: any;
  gender: any;
  lahir: any;
  telepon: any;
  color: string;
  id_psy: any;
  id: any;
  val: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.authForm = formBuilder.group({
      nama_ibu: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nama_ayah: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nnama: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ntelepon: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nalamat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      gender: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    var data = this.navParams.get('val');
    console.log(data);
    this.title = data.nama
    this.nama = data.nama
    this.alamat = data.alamant
    this.nama_ayah = data.nama_ayah
    this.nama_ibu = data.nama_ibu
    this.telepon = "0" + data.telepon
    this.id_psy = data.posyandu_id
    this.id = data.id
    this.val = data;

    if (data.gender == 'L') {
      this.gender = 'Laki-Laki'
      this.color = 'primary'
    }
    else {
      this.gender = 'Perempuan'
      this.color = 'danger'
    }
  }

  viewbalita() {
    var params = {
      'key': 'viewbalita',
      'id': this.val.id
    }
    this.http.post('http://localhost/server_posyandu/manage-data.php', JSON.stringify(params), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
      .subscribe(val => {
        this.movepage(val.body);

      }, (error => {
        console.log(error);
      }))
  }
  movepage(value) {
    var val = this.val;
    var value3 = JSON.parse(JSON.stringify(value))
    var newTanggal;
    var value4 = convertBulan(value);
    console.log(value3);
    function convertBulan(dff) {
    var value2 = dff;
    for (var i = 0; i < value2.data.length; i++) {
      var tanggal = value2.data[i].tanggal;
      newTanggal = tanggal;
      var x = newTanggal.split('-');
      var month = x[1] - 1;
      var second2 = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
      var y = x[2] + "/" + second2[month] + "/" + x[0];
      value2.data[i].tanggal = y;
    };
    return value2;
  }

   var params = {
      'value4':value4,
     'val':val,
     'value3':value3
   }
    this.navCtrl.push(ViewbalitaPage, params );
  }

  // save() {
  //   var loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   if (!this.authForm.valid) {
  //     var alert = this.alertCtrl.create({
  //       title: 'Error',
  //       message: 'Pengisian form kurang tepat',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  //   else {
  //     loading.present();
  //     var data = {
  //       'key': 'updatekader',
  //       'nama': this.nama,
  //       'username': this.username,
  //       'password': this.password,
  //       'telepon': this.telepon,
  //       'role_id': 'anggota',
  //       'posyandu_id': this.id_psy,
  //       'alamat': this.alamat,
  //       'aktif': this.Toggled,
  //       'id': this.id
  //     }
  //     this.http.post('http://localhost/server_posyandu/manage-data.php', JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
  //       .subscribe(val => {
  //         console.log(val.body);
  //         if(val.body == 'success') {
  //           this.navCtrl.pop().then(()=>{
  //             loading.dismiss()
  //           })
  //         }
  //         else if(val.body == 'failed') {
  //
  //         }
  //         else {
  //
  //         }
  //
  //       }, (error => {
  //         console.log(error);
  //       }))
  //   }
  // }

}
