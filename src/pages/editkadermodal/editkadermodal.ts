import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the EditkadermodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editkadermodal',
  templateUrl: 'editkadermodal.html',
})
export class EditkadermodalPage {
  authForm: any;
  title: any;
  nama: any;
  alamat: any;
  password: any;
  telepon: any;
  status: any;
  isToggled: boolean;
  color: string;
  username: any;
  id_psy: any;
  id: any;
  Toggled: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.authForm = formBuilder.group({
      nusername: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      npassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nnama: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ntelepon: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      nalamat: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      naktif: ['', Validators.compose([Validators.required])],

    });
  }

  ionViewDidLoad() {

    let data = this.navParams.get('val');
    this.title = data.nama
    this.nama = data.nama
    this.alamat = data.alamat
    this.username = data.username
    this.password = data.password
    this.telepon = "0" + data.telepon
    this.id_psy = data.posyandu_id
    this.id = data.id
    if (data.aktif == 1) {
      this.color = 'primary';
      this.isToggled = true;
      this.Toggled = 1;
    }
    else {
      this.color = 'danger'
      this.isToggled = false;
      this.Toggled = 0;
    }
  }

  state() {
    if (this.isToggled == true) {
      this.Toggled = 1;
    }
    else if (this.isToggled == false) {
      this.Toggled = 0;
    }

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
        'key': 'updatekader',
        'nama': this.nama,
        'username': this.username,
        'password': this.password,
        'telepon': this.telepon,
        'role_id': 'anggota',
        'posyandu_id': this.id_psy,
        'alamat': this.alamat,
        'aktif': this.Toggled,
        'id': this.id
      }
      this.http.post('http://localhost/server_posyandu/manage-data.php', JSON.stringify(data), { headers: new HttpHeaders().set('Content-Type', 'application/json'), observe: 'response' })
        .subscribe(val => {
          console.log(val.body);
          if(val.body == 'success') {
            this.navCtrl.pop().then(()=>{
              loading.dismiss()
            })
          }
          else if(val.body == 'failed') {

          }
          else {

          }

        }, (error => {
          console.log(error);
        }))
    }
  }

}
