import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivitiesService {
    private activityUrl = 'assets/activities.json';
    constructor(private http: Http) { }

    getActivities() {
        return this.http.get(this.activityUrl)
            .map(res => res.json());
    }
}