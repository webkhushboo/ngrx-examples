import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Course, compareCourses } from '../model/course';
import { CourseActions } from '../action-types';
import { createReducer, on } from '@ngrx/store';

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapater = createEntityAdapter<Course>({
  sortComparer: compareCourses
});

export const initialCourseState = adapater.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapater.addAll(
      action.course, {...state, allCoursesLoaded: true })),

  on(CourseActions.courseUpdated,
    (state, action) => adapater.updateOne(
      action.update, state
    ))
);

export const {selectAll} = adapater.getSelectors();
