import { Injectable } from '@angular/core';
import { NotificationsService } from '@birthday-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as BirthdaysActions from './birthday.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BirthdaysActions.createBirthdaySuccess),
        tap(() => this.notificationService.notify('Create Birthday Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BirthdaysActions.updateBirthdaySuccess),
        tap(() => this.notificationService.notify('Update Birthday Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BirthdaysActions.deleteBirthdaySuccess),
        tap(() => this.notificationService.notify('Delete Birthday Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
