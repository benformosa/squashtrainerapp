import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoutineService {
    private routineUrl: string;
    constructor(private http: Http) { }

    getRoutine(routineUrl: string) {
        this.routineUrl = routineUrl;
        return this.http.get(this.routineUrl)
            .map(res => res.json());
    }
}