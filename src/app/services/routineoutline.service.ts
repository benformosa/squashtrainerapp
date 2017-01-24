import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoutineOutlineService {
    private routineUrl: string;
    constructor(private http: Http) { }

    getRoutineOutline(routineUrl: string) {
        this.routineUrl = routineUrl;
        return this.http.get(this.routineUrl)
            .map(res => res.json());
    }
}