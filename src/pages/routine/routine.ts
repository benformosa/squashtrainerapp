import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity } from '../../app/activity.class';
import { Routine } from '../../app/routine.class';
import { RoutineItem } from '../../app/routineitem.class';
import { ActivitiesService } from '../../app/services/activities.service';
import { RoutineService } from '../../app/services/routine.service';

@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
  providers: [
    Activity,
    Routine,
    RoutineItem,
    ActivitiesService,
    RoutineService
  ]
})
export class RoutinePage {
  private error: Error;
  activities: Activity[];
  routine: Routine;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private activitiesService: ActivitiesService,
    private routineService: RoutineService
  ) {
    this.activitiesService.getActivities().subscribe(activities => {
      this.activities = activities;
    });

    this.routineService.getRoutine('../../assets/routine-1.json', this.activities).subscribe(routine => {
      this.routine = routine;
    });
  }
}