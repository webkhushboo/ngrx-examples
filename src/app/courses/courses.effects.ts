import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { CourseActions } from './action-types';
import { CoursesHttpService } from './services/courses-http.service';
import { allCoursesLoaded } from './course.action';
import { Course } from './model/course';

@Injectable()
export class CoursesEffect {
  loadCourses$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(action => this.couresesService.findAllCourses()),
      map((course: Course[]) => allCoursesLoaded({ course }))
    )
  );

  saveCourses$ = createEffect(
    () => this.action$.pipe(
      ofType(CourseActions.courseUpdated),
      concatMap(action => this.couresesService.saveCourse(
        action.update.id,
        action.update.changes
      ))
    ),
    {dispatch: false}
  );

  constructor(
    private action$: Actions,
    private couresesService: CoursesHttpService
  ) {

  }
}
