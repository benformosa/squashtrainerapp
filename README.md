# Squash Trainer
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Squash Trainer is an [Ionic](http://ionicframework.com) application which provides customisable squash training routines with voice cues.

## Get started
```bash
npm install
cordova prepare
ionic run Android
```

## Classes
Class | Definition
--- | ---
Activity | A single type of training activity or exercise.
RoutineItem | An instance of an activity, including a time for the activity to run for.
RoutineOutline | A training routine, with an array of references to Activity, plus times. Used to load Routines from file. 
Routine | A training routine, including an array of RoutineItems.
