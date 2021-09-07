import { Injectable } from "@angular/core";
import { Birthday } from "@birthday-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as BirthdayActions from './birthday.actions';
import * as BirthdaySelectors from './birthday.selectors';
import * as fromBirthdays from './birthday.reducer';


@Injectable({
    providedIn: 'root'
})

export class BirthdayFacade {
    allBirthdays$ = this.store.pipe(
        map((state) => BirthdaySelectors.getAllBirthdays(state)),
    )
    selectedBirthdays$ = this.store.pipe(select(BirthdaySelectors.getSelectedBirthday));
    loaded$ = this.store.pipe(select(BirthdaySelectors.getBirthdaysLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === BirthdayActions.createBirthday({} as any) .type ||
        action.type === BirthdayActions.updateBirthday({} as any) .type ||
        action.type === BirthdayActions.deleteBirthday({} as any) .type
        ))

        selectBirthday(birthdayId: string) {
            this.dispatch(BirthdayActions.selectBirthday({ birthdayId }));
        };

        loadBirthdays() {
            this.dispatch(BirthdayActions.loadBirthdays())
        };

        loadBirthday(birthdayId: string) {
            this.dispatch(BirthdayActions.loadBirthday({ birthdayId }))
        };

        saveBirthday(birthday: Birthday) {
            birthday.id ? this.updateBirthday(birthday) : this.createBirthday(birthday)
        };

        createBirthday(birthday: Birthday) {
            this.dispatch(BirthdayActions.createBirthday({ birthday }))
        };

        updateBirthday(birthday: Birthday) {
            this.dispatch(BirthdayActions.updateBirthday({ birthday }))
        };

        deleteBirthday(birthday: Birthday) {
            this.dispatch(BirthdayActions.deleteBirthday({ birthday }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromBirthdays.BirthdayPartialState>,
            private actions$: ActionsSubject
        ) {}
}