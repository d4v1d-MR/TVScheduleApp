import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";
import { SeriesDetailPage } from '../series-detail/series-detail';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  
  series = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService) {
  }

  ionViewDidLoad() {
    this.dbApiService.getSeries().subscribe(data => this.series = data);
    console.log('ionViewDidLoad SeriesPage');
  }

  goToSeriesDetail(serie){
    console.log(serie);
    this.navCtrl.push(SeriesDetailPage, serie);
  }

}
