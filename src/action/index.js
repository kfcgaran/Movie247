import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from '../constants/';
import GetArrayData from '../api/api'

export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = (err) => {
    return {
        type: FETCHING_DATA_ERROR,
        err
    }
}

// async thunk fetchData
export const fetchData = (urls) => {
    return (dispatch) => {
        dispatch(getData())  
        Promise.all(GetArrayData(urls))
        .then(res => dispatch(getDataSuccess(res)))   
        .catch((err) => dispatch(getDataFailure(err)))
    }
}
