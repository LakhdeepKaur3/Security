import * as actionTypes from '../actions/actionTypes';
import  updateObject  from '../utility';

const initialState = {
        error:false,
        message:'',
        authorized:false,
        loggedIn:false
};


const reducer = (state=initialState, action)=>{
    switch( action.type){
        case actionTypes.REGISTER_USER:
            return updateObject(state,{...state,...action.payload})
        case actionTypes.REGISTER_USER_FAILED:
            return updateObject(state,{...state,...action.payload});
        case actionTypes.LOGIN_USER:
            return updateObject(state,{...state,...action.payload})
        case actionTypes.LOGIN_USER_FAILED:
            return updateObject(state,{...state,...action.payload});
        case actionTypes.LOGOUT_USER:
            return updateObject(state,{...state,...action.payload});
        default:
            return state;
    }
}

export default reducer;