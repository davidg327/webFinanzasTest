import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    getExpensesRequesting: false,
    getExpensesSuccess: false,
    getExpensesError: '',
    expenses: [],
    createExpenseRequesting: false,
    createExpenseSuccess: false,
    createExpenseError: '',
};

export const expensesSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        getExpense(state) {
            state.getExpensesRequesting = true;
        },
        getExpenseSuccess(state, action) {
            state.getExpensesRequesting = false;
            state.getExpensesSuccess = true;
            state.expenses = action.payload;
        },
        getExpenseError(state, action) {
            state.getExpensesRequesting = false;
            state.getExpensesError = action.payload;
        },
        createExpense(state, action) {
            state.createExpenseRequesting = true;
        },
        createExpenseSuccess(state, action) {
            state.createExpenseRequesting = false;
            state.createExpenseSuccess = true;
            state.expenses = [action.payload, ...state.expenses];
        },
        createExpenseError(state, action) {
            state.createExpenseRequesting = false;
            state.createExpenseError = action.payload;
        },
    },
});

export const {
    getExpense,
    getExpenseSuccess,
    getExpenseError,
    createExpense,
    createExpenseSuccess,
    createExpenseError,
} = expensesSlice.actions;

export default expensesSlice.reducer;
