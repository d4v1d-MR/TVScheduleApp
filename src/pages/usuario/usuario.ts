import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  usuario = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth
  ){
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      this.usuario = data;
      console.log(data.email);
    });
    console.log('ionViewDidLoad PerfilPage');
  }

}

