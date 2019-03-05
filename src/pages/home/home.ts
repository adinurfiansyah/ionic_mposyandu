import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, icon:string}>;
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Flood Ranger', icon: "analytics" },
      { title: 'Tentang Kami', icon: "contacts" }
    ];
  }

}
