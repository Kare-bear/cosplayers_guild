import axios from "axios";

const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_USER = "UPDATE_USER";


export function retrieveUser(){
    console.log("hello")
    return {
        type: RETRIEVE_USER,
        payload: axios
            .get("/api/me")
            .then(response => response.data)
            .catch(console.log)
    };
}

export function updateUser(name, id){
    return{
        type: UPDATE_USER,
        payload: axios
        .put('/api/name', { name, id })
        .then(response => response.data)
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
            return Object.assign( {}, state, {
                isLoading: false,
                user: action.payload
            });

        case `${ RETRIEVE_USER}_REJECTED`:
            return Object.assign( {}, state, {
                isLoading: false,
                didError: true
            });



        default:
            return state;
    }
}