import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Activity } from '../classes/activity.class';
import { Routine } from '../classes/routine.class';
import { RoutineItem } from '../classes/routineitem.class';

@Injectable()
export class RoutineService {
    private routineUrl: string;
    constructor(private http: Http) { }

    getRoutine(routineUrl: string, activities: Activity[]) {
        this.routineUrl = routineUrl;
        return this.http.get(this.routineUrl)
            .map(res => res.json());
    }
}