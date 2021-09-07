import { emptyBirthday } from "@birthday-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { birthdayAdapter, BirthdayState, BIRTHDAY_FEATURE_KEY } from "./birthday.reducer";

export const getBirthdayState = createFeatureSelector<BirthdayState>(BIRTHDAY_FEATURE_KEY);

const { selectAll, selectEntities } = birthdayAdapter.getSelectors();

export const getBirthdaysLoaded = createSelector(
    getBirthdayState,
    (state: BirthdayState) => state.loaded
);

export const getBirthdayError = createSelector(
    getBirthdayState,
    (state: BirthdayState) => state.error
);

export const getAllBirthdays = createSelector(
    getBirthdayState,
    (state: BirthdayState) => selectAll(state)
);

export const getBirthdayEntities = createSelector(
    getBirthdayState,
    (state: BirthdayState) => selectEntities(state)
);

export const getSelectedBirthdayId = createSelector(
    getBirthdayState,
    (state: BirthdayState) => state.selectedId
);

export const getSelectedBirthday = createSelector(
    getBirthdayEntities,
    getSelectedBirthdayId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyBirthday
);