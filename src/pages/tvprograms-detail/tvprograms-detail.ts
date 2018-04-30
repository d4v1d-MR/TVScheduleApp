import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbApiService} from "../../service/db-api.service";

/**
 * Generated class for the TvprogramsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tvprograms-detail',
  templateUrl: 'tvprograms-detail.html',
})
export class TvprogramsDetailPage {

  horario: string;
  program: any = {};
  details = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dbApiService: DbApiService) {
    this.program = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvprogramsDetailPage');
    this.dbApiService.getTVProgramsDetails(this.program.key).subscribe(data => this.details = data);
  }

  optionToday() {
    this.horario = "Hoy";
    this.dbApiService.getTVProgramsDetailsWithDay(this.program.key, this.horario).subscribe(data => this.details = data);
  }

  optionTomorrow() {
    this.horario = "Mañana";
    this.dbApiService.getTVProgramsDetailsWithDay(this.program.key, this.horario).subscribe(data => this.details = data);
  }

  optionYesterday() {
    this.horario = "Ayer";
    this.dbApiService.getTVProgramsDetailsWithDay(this.program.key, this.horario).subscribe(data => this.details = data);
  }

}
