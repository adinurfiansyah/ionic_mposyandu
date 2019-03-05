import { Component } from '@angular/core';
import { LoadingController, AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AddkadermodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addkadermodal',
  templateUrl: 'addkadermodal.html',
})
export class AddkadermodalPage {
  authForm: any;
  nama: any;
  alamat: any;
  password: any;
  telepon: any;
  id:any;
  username: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.authForm = formBuilder.group({
      nusername: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      npassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nnama: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ntelepon: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nalamat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    let data = this.navParams.get('id');
    this.id = data;
    console.log(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddkadermodalPage');
  }

  save() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (!this.authForm.valid) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Pengisian form kurang tepat',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else {
      loading.present();
      let data = {
        'key': 'addkader',
        'psy': this.id,
        'nama': this.nama,
        'username': this.username,
        'password': this.password,
        'telepon': this.telepon,
        'role_id': 'anggota',
        'alamat': this.alamat,
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
  }

}
