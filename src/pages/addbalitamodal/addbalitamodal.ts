import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AddbalitamodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbalitamodal',
  templateUrl: 'addbalitamodal.html',
})
export class AddbalitamodalPage {
  authForm: any;
  nama: any;
  alamat: any;
  password: any;
  telepon: any;
  id: any;
  username: any;
  nama_ayah: any;
  nama_ibu: any;
  status: any;
  gender: any;
  lahir: any;
  tinggi: any;
  berat: any;
  lingkar: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    public alertCtrl: AlertController) {
    this.authForm = formBuilder.group({
      nusername: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      npassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nnama: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ntelepon: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nalamat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nama_ibu: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nama_ayah: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      gender: ['', Validators.compose([Validators.required])],
      lahir: ['', Validators.compose([Validators.required])],
      berat: ['', Validators.compose([Validators.required])],
      lingkar: ['', Validators.compose([Validators.required])],
      tinggi: ['', Validators.compose([Validators.required])],
    });
  }
  save() {
    if (this.authForm.valid) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      let id = this.navParams.get('id');
      let petugas = this.navParams.get('nama');
      let data = {
        'id': id,
        'nama': this.nama,
        'username': this.username,
        'password': this.password,
        'gender': this.gender,
        'lahir': this.lahir,
        'berat':this.berat,
        'tinggi':this.tinggi,
        'lingkar':this.lingkar,
        'ayah':this.nama_ayah,
        'ibu':this.nama_ibu,
        'alamat':this.alamat,
        'telepon':this.telepon,
        'petugas':petugas,
        'key':'addBalita'
      }
      this.http.post('http://localhost/server_posyandu/manage-data.php', JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
        .subscribe(val => {
          console.log(val.body);
          if (val.body == 'success') {
            this.navCtrl.pop().then(() => {
              loading.dismiss()
            })
          }
          else if (val.body == 'failed') {

          }
          else {

          }

        }, (error => {
          console.log(error);
            loading.dismiss()
        }))
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Pengisian form kurang tepat',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

}
