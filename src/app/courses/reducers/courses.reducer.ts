import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Course } from '../model/course';
import { CourseActions } from '../action-types';
import { createReducer, on } from '@ngrx/store';

export interface CoursesState extends EntityState<Course> {
  
}

export const adapater = createEntityAdapter<Course>();

export const initialCourseState = adapater.getInitialState();

export const coursesReducer = createReducer(
  initialCourseState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapater.addAll(action.course, state))
);

export const {selectAll} = adapater.getSelectors();
