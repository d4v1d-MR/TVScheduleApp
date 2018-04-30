import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";
import {MoviesDetailPage} from "../movies-detail/movies-detail";

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService) {
  }

  ionViewDidLoad() {
    this.dbApiService.getMovies().subscribe(data => this.movies = data);
    console.log('ionViewDidLoad MoviesPage');
  }

  goToDetails(movie) {
    this.navCtrl.push(MoviesDetailPage, movie);
  }

}
