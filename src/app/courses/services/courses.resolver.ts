import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';
import { CourseEntityService } from './course-entity.service';

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false;
  constructor(
    private courseService: CourseEntityService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.courseService.loaded$.pipe(
      tap(
        loaded => {
          if (!loaded) {
            this.courseService.getAll();
          }
        }
      ),
      filter( loaded => !! loaded),
      first()
    );
  }
}
