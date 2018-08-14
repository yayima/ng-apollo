import { Injectable } from '@angular/core';
// rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// apollo
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
// app
import { Course, Query } from './types';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apollo: Apollo) { }

  /** GET courses from the server */
  getCourses(): Observable<Course[]> {

    return this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }
      `
    }).valueChanges.pipe(
      map(result => result.data.allCourses)
    );
  }
}
