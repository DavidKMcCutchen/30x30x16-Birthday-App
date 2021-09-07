import { Birthday } from "@birthday-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as BirthdayActions from './birthday.actions';

export const BIRTHDAY_FEATURE_KEY = 'birthdays';

export interface BirthdayState extends EntityState<Birthday> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface BirthdayPartialState {
    readonly [BIRTHDAY_FEATURE_KEY]: BirthdayState
};

export const birthdayAdapter: EntityAdapter<Birthday> = createEntityAdapter<Birthday>();

export const initialBirthdayState: BirthdayState = birthdayAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): BirthdayState => ({ ...state, error});

const onDispatch = (state, action): BirthdayState => ({
    ...state,
    loaded: false,
    error: null
});

const _birthdayReducer = createReducer(
    initialBirthdayState,
    on(
        BirthdayActions.loadBirthdayFailed,
        BirthdayActions.loadBirthdaysFailed,
        BirthdayActions.createBirthdayFailed,
        BirthdayActions.updateBirthdayFailed,
        BirthdayActions.deleteBirthdayFailed,
        onFailed
    ),
    on(
        BirthdayActions.loadBirthday,
        BirthdayActions.loadBirthdays,
        BirthdayActions.createBirthday,
        BirthdayActions.updateBirthday,
        BirthdayActions.deleteBirthday,
        onDispatch
    ),
    on(
        BirthdayActions.loadBirthdaySuccess, (state, { birthday }) =>
        birthdayAdapter.upsertOne(birthday, {...state, loaded: true})
    ),
    on(
        BirthdayActions.selectBirthday, (state, { birthdayId }) => ({
            ...state,
            selectedId: birthdayId
        })
    ),
    on(
        BirthdayActions.loadBirthdaysSuccess, (state, { birthdays }) =>
        birthdayAdapter.setAll(birthdays, {...state, loaded: true})
    ),
    on(
        BirthdayActions.deleteBirthdaySuccess, (state, { birthday }) =>
        birthdayAdapter.removeOne(birthday.id, {...state, loaded: true})
    ),
    on(
        BirthdayActions.updateBirthdaySuccess, (state, { birthday }) =>
        birthdayAdapter.updateOne(
            {id: birthday.id, changes: birthday},
            {...state, loaded: true}
        )
    ),
    on(
        BirthdayActions.createBirthdaySuccess, (state, {birthday }) =>
        birthdayAdapter.addOne(birthday, {...state, loaded: true})
    ),
)

export function birthdayReducer(
    state: BirthdayState | undefined,
    action: Action
) {
    return _birthdayReducer(state, action)
}