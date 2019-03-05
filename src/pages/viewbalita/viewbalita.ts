import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewgraphPage } from '../../pages/viewgraph/viewgraph';


/**
 * Generated class for the ViewbalitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewbalita',
  templateUrl: 'viewbalita.html',
})

export class ViewbalitaPage {
  title: any;
  color: any;
  gender: any;
  berat: any;
  tinggi: any;
  lingkar: any;
  petugas: any;
  name: any;
  idx: any;
  t: any;
  t2: any = [];
  idx2: any;
  idx3: any = [];
  icon1: any;
  vval: any;
  icon2: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let data = this.navParams.get('value4');
    let val = this.navParams.get('val');
    let vals = this.navParams.get('value3');
    console.log(vals.data[0].tanggal);
    this.title = val.nama
    this.vval = val;
    this.name = data.data

    for (var i = 0; i < data.data.length; i++) {
      this.icon2[i] = "arrow-dropdown";
      this.t2[i] = true;
    }

    if (val.gender == 'L') {
      this.gender = 'Laki-Laki'
      this.color = 'primary'
    }
    else {
      this.gender = 'Perempuan'
      this.color = 'danger'
    }
    this.t = true;

    this.icon1 = "arrow-dropdown";

  }
  toggleShown1() {
    if (this.t == true) {
      this.idx = 1;
      this.t = false;
      this.icon1 = "arrow-dropup";
    }
    else {
      this.idx = 0;
      this.t = true;
      this.icon1 = "arrow-dropdown";
      this.idx2 = 0;
    }
  }
  toggleShown2(val, index) {
    if (this.t2[index] == true && this.idx == 1) {

      this.idx2 = 1;
      this.t2[index] = false;
      this.idx3[index] = val;
      this.icon2[index] = "arrow-dropup";
    }
    else {
      this.idx2 = 0;
      this.t2[index] = true;
      this.idx3[index] = 0;
      this.icon2[index] = "arrow-dropdown";
  }
}

graph() {
let val = this.navParams.get('value3');
val = val.data;
let data = this.vval;
this.navCtrl.push(ViewgraphPage, {val, data});
}

}
