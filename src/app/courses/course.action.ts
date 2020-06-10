import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
  '[Load courses Effect] All courses Loaded',
  props<{ course: Course[] }>()
);
