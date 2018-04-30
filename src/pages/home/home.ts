import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SeriesPage} from "../series/series";
import {MoviesPage} from "../movies/movies";
import {TvprogramsPage} from "../tvprograms/tvprograms";
import {LoginPage} from "../login/login";
import {UsuarioPage} from "../usuario/usuario";
import { AngularFireAuth } from "angularfire2/auth";


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  usuario = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      this.usuario = data;
      if (data && data.email && data.uid) {

        this.toast.create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      }
    });
  }

  openSeriesPage(){
    this.navCtrl.push(SeriesPage);
  }

  openMoviesPage() {
    this.navCtrl.push(MoviesPage);
  }

  openTVProgramPage() {
    this.navCtrl.push(TvprogramsPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navPerfil() {
    this.navCtrl.push(UsuarioPage);
  }

  logout() {
    this.afAuth.auth.signOut().then(() =>
      this.toast.create({
        message: `Se ha cerrado sesión correctamente`,
        duration: 3000
      }).present()
    );
    this.navCtrl.setRoot(HomePage);
  }

}
