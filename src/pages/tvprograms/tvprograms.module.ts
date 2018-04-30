import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvprogramsPage } from './tvprograms';

@NgModule({
  declarations: [
    TvprogramsPage,
  ],
  imports: [
    IonicPageModule.forChild(TvprogramsPage),
  ],
})
export class TvprogramsPageModule {}
