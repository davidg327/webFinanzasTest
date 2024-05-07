import {all, fork} from 'redux-saga/effects';
import UserSagas from './user/sagas';
import ExpenseSagas from './expense/sagas';
import HistorySagas from './history/sagas';

export function* Sagas() {
    yield all([
        fork(UserSagas),
        fork(ExpenseSagas),
        fork(HistorySagas),
    ]);
}

