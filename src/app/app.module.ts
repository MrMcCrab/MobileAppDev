import { AuthService } from './../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

// import { HomePage } from '../pages/home/home';


 
const firebaseConfig = {
    apiKey: "AIzaSyCRAIQFWLkArtm-BoHQPcG1-0RD9fWLeDs",
    authDomain: "mobileappdev-4b655.firebaseapp.com",
    databaseURL: "https://mobileappdev-4b655.firebaseio.com",
    projectId: "mobileappdev-4b655",
    storageBucket: "",
    // storageBucket: "dmaoin.appspot.com",
    messagingSenderId: "626449268452"
  };
 
@NgModule({
  declarations: [
    MyApp
    //HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirebaseProvider
  ]
})
export class AppModule {}