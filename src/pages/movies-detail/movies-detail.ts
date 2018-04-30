import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";


/**
 * Generated class for the MoviesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-detail',
  templateUrl: 'movies-detail.html',
})
export class MoviesDetailPage {

  movie: any = {};
  details = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService) {
    this.movie = this.navParams.data;
  }

  ionViewDidLoad() {
    this.dbApiService.getMovieDetails(this.movie.categoria, this.movie.key).subscribe(data => this.details = data);
    console.log('ionViewDidLoad MoviesDetailPage');
  }

}
