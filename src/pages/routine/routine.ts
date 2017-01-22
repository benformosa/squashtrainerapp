import { Component } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { ActivitiesService } from '../../app/services/activities.service';
import { RoutineService } from '../../app/services/routine.service';

@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
  providers: [
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

    this.routineService.getRoutine('../../assets/routine-1.json').subscribe(routine => {
      this.routine = routine;
    });
  }
}

class Activity {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
}

class Routine {
  id: string;
  name: string;
  activities: RoutineItem[];
}

class RoutineItem {
  id: number;
  time: number;
}