import * as actionTypes from './actionTypes';
import axios from '../../axios-api';
export const fetchAuthors = () => {
    return dispatch => {
        axios.get("/authors").then(response => {
            if (response.data.success) {
                dispatch({
                    type: actionTypes.FETCH_AUTHORS,
                    payload: response.data.authors
                });
            }
        }).catch(error => {
            dispatch({
                type: actionTypes.FETCH_AUTHORS,
                payload: []
            });
        });
    }

}