import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseService } from '../course.service';
import { Course, Query } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  courses: Observable<Course[]>;

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
}
