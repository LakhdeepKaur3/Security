import * as actionTypes from './actionTypes';
import axios from '../../axios-api';
import ax from 'axios';
export const logOutUser = ()=>{
    return dispatch =>{
        return dispatch({ type: actionTypes.LOGOUT_USER,payload: {
            authorized:false,
            error:false,
            message:'Successfully logged out'
        }});
    }
}
export const registerUser = (userName,password) => {
   
    return dispatch => {
        ax.post("http://localhost:3000/auth/register", {
            userName,
            password
        }).then(function (response) {
            console.log("success",response);
            
            if(response.data.authorized){
                let token;
                let rest;
                ({token, ...rest} = response.data);
                localStorage.token = token;
                console.log("token now",token);
                axios.defaults.headers.common['x-access-token'] = token;
                console.log("rest",rest);
                return dispatch({ type: actionTypes.REGISTER_USER,payload: rest });
            }
            else{
                return dispatch({ type: actionTypes.REGISTER_USER_FAILED,payload: response.data });
            }
            
        }).catch(function (error) {
            return dispatch({ type: actionTypes.REGISTER_USER_FAILED,payload: {
                authorized:false,
                error:true,
                message:'Login In Failed, please try after sometime'
            }});
        });
    }
}
export const loginUser = (userName,password)=>{
    return dispatch => {
        ax.post("http://localhost:3000/auth/login",{
            userName,
            password
        }).then(function(response){
            console.log("success",response);
            if(response.data.authorized){
                let token;
                let rest;
                ({token, ...rest} = response.data);
                localStorage.token = token;
                console.log("rest is",rest);
                
                axios.defaults.headers.common['x-access-token'] = token;
                
                return dispatch({ type: actionTypes.LOGIN_USER,payload: rest });
            }
            else{
                return dispatch({ type: actionTypes.LOGIN_USER_FAILED,payload: response.data });
            }
        }).catch(function(error){

            return dispatch({ type: actionTypes.LOGIN_USER_FAILED,payload: {
                authorized:false,
                error:true,
                message:'Login In Failed, please try after sometime'
            }});
        });
    }
}