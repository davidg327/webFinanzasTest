import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {Sagas} from './sagas';
import userReducer from './user/reducer';
import expenseReducer from './expense/reducer';
import historyReducer from './history/reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        user: userReducer,
        expense: expenseReducer,
        history: historyReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(Sagas);

export default store
