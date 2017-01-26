import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity } from '../../app/classes/activity.class';
import { Routine } from '../../app/classes/routine.class';
import { RoutineItem } from '../../app/classes/routineitem.class';
import { ActivitiesService } from '../../app/services/activities.service';
import { RoutineOutlineService } from '../../app/services/routineOutline.service';

@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
  providers: [
    Activity,
    Routine,
    RoutineItem,
    ActivitiesService,
    RoutineOutlineService
  ]
})
export class RoutinePage {
  activities: Activity[];
  routine: Routine;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private activitiesService: ActivitiesService,
    private routineOutlineService: RoutineOutlineService
  ) {
    this.activitiesService.getActivities().subscribe(activities => {
      this.activities = activities;
    });

    this.routineOutlineService.getRoutineOutline('assets/routine-1.json').subscribe(routine => {
      this.routine = routine;
    });
  }
}