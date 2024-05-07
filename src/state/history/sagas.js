import {call, all, put, takeEvery} from 'redux-saga/effects';
import {
    createHistory,
    createHistoryError,
    createHistorySuccess,
    getHistory,
    getHistoryError,
    getHistorySuccess

} from "./reducer";

const getHistoriesAPI = (values) => {
    return fetch(`http://localhost:3000/api/histories/get_histories_by_id`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(json => {
            if (json.length > 0) {
                return json;
            }
            throw json;
        })
        .catch(error => {
            throw error;
        });
};

function* getHistoriesFlow(action){
    try {
        const {values} = action.payload;
        const histories = yield call(getHistoriesAPI, values);
        yield put(getHistorySuccess(histories));
    } catch (error) {
        yield put(getHistoryError(error));
    }
}

const createHistoryAPI = (values) => {
    return fetch(`http://localhost:3000/api/histories/create_history`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(json => {
            if (json.length > 0) {
                return json[0];
            }
            throw json;
        })
        .catch(error => {
            throw error;
        });
};

function* createHistoryFlow(action){
    try {
        const {values} = action.payload;
        const history = yield call(createHistoryAPI, values);
        yield put(createHistorySuccess(history));
    } catch (error) {
        yield put(createHistoryError(error));
    }
}

function* historiesWatcher() {
    yield all([
        takeEvery(getHistory.type, getHistoriesFlow),
        takeEvery(createHistory.type, createHistoryFlow),
    ]);
}

export default historiesWatcher;
