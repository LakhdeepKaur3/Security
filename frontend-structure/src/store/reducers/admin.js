import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
const initialState = {
    adminList:[]
}

const fetchAdminList = (state, action)=>{
    return updateObject(state,{adminList:action.payload});
   
}

const fetchAdminListFailed = (state, action)=>{
    return updateObject(state,{error:true});
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ADMIN_LIST:
            return fetchAdminList(state,action);
        case actionTypes.FETCH_ADMIN_LIST_FAILED:
            return fetchAdminListFailed(state,action);
        case actionTypes.DELETE_ADMIN:
             let adminList,rest;
            ({adminList,...rest} = action.payload);
            return updateObject(state,{...state,adminList,...rest});
        case actionTypes.DELETE_ADMIN_FAILED:
            return updateObject(state,{...state,...action.payload});
        default:
            return state;
    }
}

export default reducer;