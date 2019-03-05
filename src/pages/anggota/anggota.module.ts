import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnggotaPage } from './anggota';

@NgModule({
  declarations: [
    AnggotaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnggotaPage),
  ],
})
export class AnggotaPageModule {}
