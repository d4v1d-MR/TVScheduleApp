import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";
import { TvprogramsDetailPage } from "../tvprograms-detail/tvprograms-detail";


/**
 * Generated class for the TvprogramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tvprograms',
  templateUrl: 'tvprograms.html',
})
export class TvprogramsPage {
  programs = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService) {
  }

  ionViewDidLoad() {
    this.dbApiService.getTVPrograms().subscribe(data => this.programs = data);
    console.log('ionViewDidLoad TvprogramsPage');
  }

  goToDetails(program) {
    this.navCtrl.push(TvprogramsDetailPage, program);
  }

}
