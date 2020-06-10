import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './reducers/courses.reducer';

import * as fromCourses from './reducers/courses.reducer';

export const selectCoursesSate = createFeatureSelector<CoursesState>('courses');

export const selectAllCourses = createSelector(
  selectCoursesSate,
  fromCourses.selectAll
);

export const selectBegineerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromotTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);
