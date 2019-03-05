import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { KetuaPage } from '../pages/ketua/ketua';
import { AnggotaPage } from '../pages/anggota/anggota';
import { AuthenticationProvider } from '../providers/authentication/authentication';
//Kader
import { EditkadermodalPage } from '../pages/editkadermodal/editkadermodal';

import { AddkadermodalPage } from '../pages/addkadermodal/addkadermodal';
//Bebas
import { ViewbalitaPage } from '../pages/viewbalita/viewbalita';
import { ViewgraphPage } from '../pages/viewgraph/viewgraph';
//Balita
import { AddweightPage } from '../pages/addweight/addweight';
import { AddbalitamodalPage } from '../pages/addbalitamodal/addbalitamodal';
import { EditbalitamodalPage } from '../pages/editbalitamodal/editbalitamodal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    KetuaPage,
    AnggotaPage,
    EditkadermodalPage,
    AddkadermodalPage,
    EditbalitamodalPage,
    ViewbalitaPage,
    ViewgraphPage,
    AddweightPage,
    AddbalitamodalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    KetuaPage,
    AnggotaPage,
    EditkadermodalPage,
    AddkadermodalPage,
    EditbalitamodalPage,
    ViewbalitaPage,
    ViewgraphPage,
    AddweightPage,
    AddbalitamodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
  ]
})
export class AppModule {}
