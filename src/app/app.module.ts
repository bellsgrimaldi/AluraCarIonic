import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListagemPage } from '../pages/listagem/listagem';
import { FooterPage } from '../pages/footer/footer';
import { HeaderPage } from '../pages/header/header';
import { CarroescolhidoPage } from '../pages/carroescolhido/carroescolhido';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListagemPage,
    HeaderPage,
    FooterPage,
    CarroescolhidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListagemPage,
    HeaderPage,
    FooterPage,
    CarroescolhidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
