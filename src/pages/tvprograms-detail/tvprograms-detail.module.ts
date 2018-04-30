import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvprogramsDetailPage } from './tvprograms-detail';

@NgModule({
  declarations: [
    TvprogramsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TvprogramsDetailPage),
  ],
})
export class TvprogramsDetailPageModule {}
