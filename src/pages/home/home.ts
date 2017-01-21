import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController) {
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

}
