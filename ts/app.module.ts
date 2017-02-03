import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {C1} from "TestDef"


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,C1 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
