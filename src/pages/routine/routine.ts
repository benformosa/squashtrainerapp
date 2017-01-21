import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Routine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html'
})
export class RoutinePage {
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({
        id: 1,
        name: "Forehand drives",
        thumbnail: "squash.png",
        shortDescription: "Hit above line, bounce before service box.",
        description: "Practice hitting consistent length by targeting the cut line having the ball bounce between the service box and back wall. Try to avoid hitting the side wall.",
        time: "00:01:00"
    });
    this.items.push({
        id: 2,
        name: "Forehand defense",
        thumbnail: "squash.png",
        shortDescription: "Target outline, lifting ball. Bounce before back wall",
        description: "Practice lifting the ball to get out of trouble by targeting the outline and having the ball bounce before the back wall. Try to avoid hitting the side wall.",
        time: "00:03:33"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutinePage');
  }

}
