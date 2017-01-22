import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AboutPage} from '../about/about';
import {RoutinePage} from '../routine/routine';
import { ActivityLibraryPage } from '../activityLibrary/activityLibrary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  routinePage = RoutinePage;
  activityLibraryPage = ActivityLibraryPage;

  constructor(public navCtrl: NavController) {}
}
