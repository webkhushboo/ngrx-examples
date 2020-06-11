

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class CoursesHttpService { 
    baseUrl = 'http://localhost:9000';
    constructor(private http: HttpClient) {

    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get(`${this.baseUrl}/api/courses`)
            .pipe(
                map(res => res['payload'])
            );
    }

    findCourseByUrl(courseUrl: string): Observable<Course> {
      return this.http.get<Course>(this.baseUrl + `/api/courses/${courseUrl}`);
    }

    findLessons(
        courseId:number,
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get<Lesson[]>(this.baseUrl + '/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }


    saveCourse(courseId: number | string, changes: Partial<Course>) {
        return this.http.put(this.baseUrl + '/api/course/' + courseId, changes);
    }


}
