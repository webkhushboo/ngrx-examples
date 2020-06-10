import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
  '[Load courses Effect] All courses Loaded',
  props<{ course: Course[] }>()
);

export const courseUpdated = createAction(
  '[Edit course Dialog] Course Updated',
  props< {update: Update<Course>}>()
);

