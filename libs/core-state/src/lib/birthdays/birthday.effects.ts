import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Birthday } from "@birthday-app/api-interfaces";
import { BirthdaysService } from "@birthday-app/core-data";
import * as BirthdayActions from './birthday.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class BirthdayEffects{
    loadBirthday$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BirthdayActions.loadBirthday),
            fetch({
                run: (action) =>
                    this.birthdaysService
                        .find(action.birthdayId)
                        .pipe(map((birthday: Birthday) => BirthdayActions.loadBirthdaySuccess({ birthday }))),
                    onError: (action, error) => BirthdayActions.loadBirthdayFailed({ error })    
            })
        ));
    loadBirthdays$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BirthdayActions.loadBirthdays),
            fetch({
                run: () =>
                    this.birthdaysService
                    .all()
                    .pipe(
                        map((birthdays: Birthday[]) => BirthdayActions.loadBirthdaysSuccess({ birthdays }))
                    ),
                onError: (action, error) => BirthdayActions.loadBirthdaysFailed({ error })    
            })
        ));
        createBirthday$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BirthdayActions.createBirthday),
            pessimisticUpdate({
                run: (action) =>
                    this.birthdaysService
                        .create(action.birthday)
                        .pipe(map((birthday: Birthday) => BirthdayActions.createBirthdaySuccess({ birthday }))),
                    onError: (action, error) => BirthdayActions.createBirthdayFailed({ error })    
            })
    ));

    updateBirthday$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BirthdayActions.updateBirthday),
            pessimisticUpdate({
                run: (action) =>
                    this.birthdaysService
                        .update(action.birthday)
                        .pipe(map((birthday: Birthday) => BirthdayActions.updateBirthdaySuccess({ birthday}))),
                    onError: (action, error) => BirthdayActions.updateBirthdayFailed({ error })    
            })
    ));

    deleteBirthday$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BirthdayActions.deleteBirthday),
            pessimisticUpdate({
                run: (action) =>
                    this.birthdaysService
                        .delete(action.birthday)
                        .pipe(
                            map(() => BirthdayActions.deleteBirthdaySuccess({ birthday: action.birthday }))
                        ),
                    onError: (action, error) => BirthdayActions.deleteBirthdayFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private birthdaysService: BirthdaysService
    ) {}    
}