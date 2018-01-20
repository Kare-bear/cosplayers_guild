import axios from "axios";

const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_USER = "UPDATE_USER";
const USER_EXISTS = "USER_EXISTS";


export function updateUser(username, id){
    return{
        type: UPDATE_USER,
        payload: axios
        .post('/api/name', { username, id })
        .then(response => response.data)
        .catch(console.log)
    };
}


export function retrieveUser(){
    console.log("hello")
    return {
        type: RETRIEVE_USER,
        payload: axios
            .get("http://localhost:3001/api/me")
            .then(response => response.data)
            .catch(console.log)
    };
}

export function userExists(){
    console.log("exists")
    return {
        type: USER_EXISTS,
        payload: axios
            .get("/api/exists")
            .then(response => response.users.data)
            .catch(console.log)
    };
}


const initialState = {
    user: {},
    isLoading: false,
    didError: false
};

export default function user( state = initialState, action){
    switch( action.type ){
        case `${ RETRIEVE_USER}_PENDING`:
            return Object.assign( {}, state, { isLoading: true });

        case `${ RETRIEVE_USER}_FULFILLED`:
        console.log(action.payload)
            return Object.assign( {}, state, {
                isLoading: false,
                user: action.payload
            });

        case `${ RETRIEVE_USER}_REJECTED`:
            return Object.assign( {}, state, {
                isLoading: false,
                didError: true
            });

        case `${UPDATE_USER}_FULFILLED`:
            return Object.assign( {}, state, {
                user:action.payload
            });

        case `${USER_EXISTS}_FULFILLED`:
            return Object.assign( {}, state, {
                user:action.payload
            });    



        default:
            return state;
    }
}