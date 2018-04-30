import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";

/**
 * Generated class for the SeriesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series-detail',
  templateUrl: 'series-detail.html',
})
export class SeriesDetailPage {

  serie: any= {};
  details = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService ) {
    this.serie = this.navParams.data;
  }

  ionViewDidLoad() {
    this.dbApiService.getSeries().subscribe(data => this.details = data);
    console.log('ionViewDidLoad SeriesDetailPage');
  }

}
