import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CourseComponent } from './courses.components';
import { CoursesComponent } from './courses/courses.component';
import { PlaceComponent } from './place/place.component';
import { CourseService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
