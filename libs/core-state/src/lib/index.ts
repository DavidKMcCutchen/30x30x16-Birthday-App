import { ActionReducerMap } from "@ngrx/store";
import * as fromBirthday from './birthdays/birthday.reducer';

export interface AppState {
    [fromBirthday.BIRTHDAY_FEATURE_KEY]: fromBirthday.BirthdayState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromBirthday.BIRTHDAY_FEATURE_KEY]: fromBirthday.birthdayReducer
};