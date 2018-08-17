import * as actionTypes from './actionTypes';

export const showPopup = ()=>{
    return dispatch =>{
        return dispatch({ type: actionTypes.SHOW_POP_UP,payload: {
            showPopup:true
        }});
    }
}
export const closePopup = ()=>{
    return dispatch =>{
        return dispatch({type:actionTypes.CLOSE_POP_UP,payload:{
            showPopup:false
        }});
    }
}