import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity } from '../../app/classes/activity.class';
import { ActivitiesService } from '../../app/services/activities.service';

@Component({
  selector: 'page-activityLibrary',
  templateUrl: 'activityLibrary.html',
  providers: [
    Activity,
    ActivitiesService,
  ]
})
export class ActivityLibraryPage {
  activities: Activity[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private activitiesService: ActivitiesService
  ) {
    this.activitiesService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }
}
