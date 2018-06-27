import * as actionTypes from '../actions/actionTypes';
import  updateObject  from '../utility';

const initialState = {
        showPopup : false
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SHOW_POP_UP:
            return updateObject(state,{...state,...action.payload});
        case actionTypes.CLOSE_POP_UP:
            return updateObject(state,{...state,...action.payload});
        default:
            return state;
    }
}

export default reducer;