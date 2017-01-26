import { Injectable } from '@angular/core';

@Injectable()
export class RoutineOutline {
  constructor(
    public id: string,
    public name: string,
    public activities: {
      id: string;
      time: number;
    }[]
  ) { }
}