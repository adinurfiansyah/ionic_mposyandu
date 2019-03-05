import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
authForm:any;
username:'';
password:'';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public authentication: AuthenticationProvider) {

    this.authForm = formBuilder.group({
           username: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
           password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    if (this.authForm.valid) {
      this.authentication.auth(this.username, this.password)
    }
    else {

    }
  }

}
