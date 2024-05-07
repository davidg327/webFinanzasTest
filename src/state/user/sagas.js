import {call, all, put, takeEvery} from 'redux-saga/effects';
import {
    createUser,
    createUserError,
    createUserSuccess, getNameUsers, getNameUsersError, getNameUsersSuccess,
    getUsers,
    getUsersError,
    getUsersSuccess, updateUser, updateUserError, updateUserSuccess
} from "./reducer";

const getUsersAPI = () => {
    return fetch(`http://localhost:3000/api/users/get_users`, {
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

function* getUsersFlow(){
    try {
        const users = yield call(getUsersAPI);
        yield put(getUsersSuccess(users));
    } catch (error) {
        yield put(getUsersError(error));
    }
}

const createUserAPI = (values) => {
    return fetch(`http://localhost:3000/api/users/create_user`, {
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

function* createUserFlow(action){
    try {
        const {values} = action.payload;
        const user = yield call(createUserAPI, values);
        yield put(createUserSuccess(user));
    } catch (error) {
        yield put(createUserError(error));
    }
}

const updateUserAPI = (values) => {
    return fetch(`http://localhost:3000/api/users/update_user`, {
        method: 'PUT',
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

function* updateUserFlow(action){
    try {
        const {values} = action.payload;
        const user = yield call(updateUserAPI, values);
        yield put(updateUserSuccess(user));
    } catch (error) {
        yield put(updateUserError(error));
    }
}

const getNameUsersAPI = () => {
    return fetch(`http://localhost:3000/api/users/get_name_users`, {
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

function* getNameUsersFlow(){
    try {
        const users = yield call(getNameUsersAPI);
        yield put(getNameUsersSuccess(users));
    } catch (error) {
        yield put(getNameUsersError(error));
    }
}


function* usersWatcher() {
    yield all([
        takeEvery(getUsers.type, getUsersFlow),
        takeEvery(createUser.type, createUserFlow),
        takeEvery(updateUser.type, updateUserFlow),
        takeEvery(getNameUsers.type, getNameUsersFlow),
    ]);
}

export default usersWatcher;
