import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    getHistoriesRequesting: false,
    getHistoriesSuccess: false,
    getHistoriesError: '',
    histories: [],
    createHistoryRequesting: false,
    createHistorySuccess: false,
    createHistoryError: '',
};

export const historiesSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        getHistory(state, action) {
            state.getHistoriesRequesting = true;
            state.histories = [];
        },
        getHistorySuccess(state, action) {
            state.getHistoriesRequesting = false;
            state.getHistoriesSuccess = true;
            state.histories = action.payload;
        },
        getHistoryError(state, action) {
            state.getHistoriesRequesting = false;
            state.getHistoriesError = action.payload;
        },
        createHistory(state, action) {
            state.createHistoryRequesting = true;
        },
        createHistorySuccess(state) {
            state.createHistoryRequesting = false;
            state.createHistorySuccess = true;
        },
        createHistoryError(state, action) {
            state.createHistoryRequesting = false;
            state.createHistoryError = action.payload;
        },
    },
});

export const {
    getHistory,
    getHistorySuccess,
    getHistoryError,
    createHistory,
    createHistorySuccess,
    createHistoryError,
} = historiesSlice.actions;

export default historiesSlice.reducer;
