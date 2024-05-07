import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    getUsersRequesting: false,
    getUsersSuccess: false,
    getUsersError: '',
    users: [],
    createUserRequesting: false,
    createUserSuccess: false,
    createUserError: '',
    updateUserRequesting: false,
    updateUserSuccess: false,
    updateUserError: '',
    getNameUsersRequesting: false,
    getNameUsersSuccess: false,
    getNameUsersError: '',
    nameUsers: [],
};

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers(state) {
            state.getUsersRequesting = true;
        },
        getUsersSuccess(state, action) {
            state.getUsersRequesting = false;
            state.getUsersSuccess = true;
            state.users = action.payload;
        },
        getUsersError(state, action) {
            state.getUsersRequesting = false;
            state.getUsersError = action.payload;
        },
        createUser(state, action) {
            state.createUserRequesting = true;
        },
        createUserSuccess(state, action) {
            state.createUserRequesting = false;
            state.createUserSuccess = true;
            state.users = [action.payload, ...state.users];
        },
        createUserError(state, action) {
            state.createUserRequesting = false;
            state.createUserError = action.payload;
        },
        updateUser(state, action) {
            state.updateUserRequesting = true;
        },
        updateUserSuccess(state, action) {
            state.createUserRequesting = false;
            state.createUserSuccess = true;
            state.users = state.users.map(user =>
                parseInt(user.id) === action.payload.id ? action.payload : user
            );
        },
        updateUserError(state, action) {
            state.createUserRequesting = false;
            state.createUserError = action.payload;
        },
        getNameUsers(state) {
            state.getNameUsersRequesting = true;
        },
        getNameUsersSuccess(state, action) {
            state.getNameUsersRequesting = false;
            state.getNameUsersSuccess = true;
            state.nameUsers = action.payload;
        },
        getNameUsersError(state, action) {
            state.getNameUsersRequesting = false;
            state.getNameUsersError = action.payload;
        },
    },
});

export const {
    getUsers,
    getUsersSuccess,
    getUsersError,
    createUser,
    createUserSuccess,
    createUserError,
    updateUser,
    updateUserSuccess,
    updateUserError,
    getNameUsers,
    getNameUsersSuccess,
    getNameUsersError,
} = usersSlice.actions;

export default usersSlice.reducer;
