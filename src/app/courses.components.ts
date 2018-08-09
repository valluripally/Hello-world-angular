import {Component} from '@angular/core';
import { CourseService } from './courses.service';
@Component({
   selector :'course',
   template:`
   <h1>{{title}}</h1>
   <ul>
   <li *ngFor="let course of courses">{{course}} </li>
   </ul>
   `
})
export class CourseComponent{
title="List Courses"
courses;
//calling for http req
constructor(service:CourseService)
{
   this.courses=service.getCourses();
}
}