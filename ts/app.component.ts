import { Component } from '@angular/core';
//import {Component } from "https://cdnjs.cloudflare.com/ajax/libs/angular.js/2.0.0-beta.17/angular2-all.umd.js";

//import {C1} from 'http://nyclp26cf32a:8080/aladdinviewbeta/ts/test.component';
//import {InputBox} from "TestDef"
import {C1} from "TestDef"


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <c1></c1>`,
})
export class AppComponent  { name = 'Angular'; }
