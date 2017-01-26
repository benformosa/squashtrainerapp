import { Injectable } from '@angular/core';

@Injectable()
export class Activity {
  id: string;
  name: string;
  shortDescription: string;
  description: string;

  constructor(
    id: string,
    name: string,
    shortDescription: string,
    description: string,
  ) { }
}