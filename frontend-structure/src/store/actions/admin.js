import * as actionTypes from './actionTypes';
import axios from '../../axios-api';

export const fetchAdminList = () => {
    return dispatch => {
        axios.get("/admin/adminList").then(response => {

            console.log("admins", response);

            dispatch({
                type: actionTypes.FETCH_ADMIN_LIST,
                payload: response.data.adminList
            });
        }).catch(error => {
            dispatch({
                type: actionTypes.FETCH_ADMIN_LIST,
                payload: []
            });
        });

    }
}

export const deleteAdmin = (userName) => {
    console.log("user", userName);
    return dispatch => {
        axios.delete("/admin/admin", { params: { userName } }).then(response => {

            if (response.data.error) {
                dispatch({
                    type: actionTypes.DELETE_ADMIN_FAILED,
                    payload: {
                        message: "Failed Deleting Record",
                        error: true
                    }
                });
            }
            else {
                dispatch({
                    type: actionTypes.DELETE_ADMIN,
                    payload: response.data
                });
            }
        }).catch(error => {
            dispatch({
                type: actionTypes.DELETE_ADMIN_FAILED,
                payload: {
                    message: " Please try after some time, Failed Deleting Record",
                    error: true
                }
            });
        })
    }

}


