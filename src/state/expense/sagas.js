import {call, all, put, takeEvery} from 'redux-saga/effects';
import {
    createExpense,
    createExpenseError,
    createExpenseSuccess,
    getExpense,
    getExpenseError,
    getExpenseSuccess
} from "./reducer";

const getExpensesAPI = () => {
    return fetch(`http://localhost:3000/api/expenses/get_expenses`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
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

function* getExpensesFlow(){
    try {
        const expenses = yield call(getExpensesAPI);
        yield put(getExpenseSuccess(expenses));
    } catch (error) {
        yield put(getExpenseError(error));
    }
}

const createExpenseAPI = (values) => {
    return fetch(`http://localhost:3000/api/expenses/create_expense`, {
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

function* createExpenseFlow(action){
    try {
        const {values} = action.payload;
        const expense = yield call(createExpenseAPI, values);
        yield put(createExpenseSuccess(expense));
    } catch (error) {
        yield put(createExpenseError(error));
    }
}

function* expensesWatcher() {
    yield all([
        takeEvery(getExpense.type, getExpensesFlow),
        takeEvery(createExpense.type, createExpenseFlow),
    ]);
}

export default expensesWatcher;
