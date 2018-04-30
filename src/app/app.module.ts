import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SeriesPage} from "../pages/series/series";
import {SeriesDetailPage} from "../pages/series-detail/series-detail";
import {MoviesPage} from "../pages/movies/movies";
import {MoviesDetailPage} from "../pages/movies-detail/movies-detail";
import {TvprogramsPage} from "../pages/tvprograms/tvprograms";
import {TvprogramsDetailPage} from "../pages/tvprograms-detail/tvprograms-detail";

import { Cloudinary } from "cloudinary-core/cloudinary-core-shrinkwrap";
import { CloudinaryModule } from "@cloudinary/angular-5.x";
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {UsuarioPage} from "../pages/usuario/usuario";
import {DbApiService} from "../service/db-api.service";


const cloudConfig = {
  cloud_name: 'dja8lufrv'
};

const cloudinaryLib = {
  Cloudinary: Cloudinary
};

export const firebaseConfig = {
  apiKey: "AIzaSyDQMFJiFiuSyT8fIcXdPiQlJ9cbftiHoYU",
  authDomain: "tvschedule-7ef28.firebaseapp.com",
  databaseURL: "https://tvschedule-7ef28.firebaseio.com",
  projectId: "tvschedule-7ef28",
  storageBucket: "tvschedule-7ef28.appspot.com",
  messagingSenderId: "551450245152"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SeriesPage,
    SeriesDetailPage,
    MoviesPage,
    MoviesDetailPage,
    TvprogramsPage,
    TvprogramsDetailPage,
    LoginPage,
    RegisterPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudinaryModule.forRoot(cloudinaryLib, cloudConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SeriesPage,
    SeriesDetailPage,
    MoviesPage,
    MoviesDetailPage,
    TvprogramsPage,
    TvprogramsDetailPage,
    LoginPage,
    RegisterPage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DbApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
