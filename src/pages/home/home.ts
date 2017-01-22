import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AboutPage} from '../about/about';
import {RoutinePage} from '../routine/routine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;
  routinePage = RoutinePage;

  constructor(public navCtrl: NavController) {}
}
