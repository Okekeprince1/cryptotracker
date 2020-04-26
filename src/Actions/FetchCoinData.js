import axios from '../Utils/axios';
import { apiBaseURL } from './../Utils/Constant';

import { 
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
 } from './../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {

        dispatch ({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/cryptocurrency/listings/latest?limit=10`)
            .then( res => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data })
                console.log("Fetching data");
            })
            .catch(err => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: res.err })
            });
    }
}