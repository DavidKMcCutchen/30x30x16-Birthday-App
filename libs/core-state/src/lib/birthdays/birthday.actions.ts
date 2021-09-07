import { createAction, props } from "@ngrx/store";
import {  Birthday } from "@birthday-app/api-interfaces";

// Select Entity

export const selectBirthday = createAction(
    '[BIRTHDAY] Select Birthday',
    props<{ birthdayId: string }>()
);

// Load all Entities

export const loadBirthdays = createAction(
    '[BIRTHDAY] Load Birthdays'
);

export const loadBirthdaysSuccess = createAction(
    '[BIRTHDAY] Load Birthdays Success',
    props<{ birthdays: Birthday[]}>()
);

export const loadBirthdaysFailed = createAction(
    '[BIRTHDAY] Load Birthdays Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadBirthday = createAction(
    '[BIRTHDAY] Load Birthday',
    props<{ birthdayId: string}>()
);

export const loadBirthdaySuccess = createAction(
    '[BIRTHDAY] Load Birthday Success',
    props<{ birthday: Birthday}>()
);

export const loadBirthdayFailed = createAction(
    '[BIRTHDAY] Load Birthday Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createBirthday = createAction(
    '[BIRTHDAY] Create Birthday',
    props<{ birthday: Birthday}>()
);

export const createBirthdaySuccess = createAction(
    '[BIRTHDAY] Create Birthday Success',
    props<{ birthday: Birthday}>()
);

export const createBirthdayFailed = createAction(
    '[BIRTHDAY] Create Birthday Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateBirthday = createAction(
    '[BIRTHDAY] Update Birthday',
    props<{ birthday: Birthday}>()
);

export const updateBirthdaySuccess = createAction(
    '[BIRTHDAY] Update Birthday Success',
    props<{ birthday: Birthday}>()
);

export const updateBirthdayFailed = createAction(
    '[BIRTHDAY] Create Birthday Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteBirthday = createAction(
    '[BIRTHDAY] Delete Birthday',
    props<{ birthday: Birthday}>()
);

export const deleteBirthdaySuccess = createAction(
    '[BIRTHDAY] Delete Birthday Success',
    props<{ birthday: Birthday}>()
);

export const deleteBirthdayFailed = createAction(
    '[BIRTHDAY] Create Birthday Failed',
    props<{ error: any}>()
);