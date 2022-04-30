import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR
} 
from './ActionTypes';


export const getDataLoading = () => {
    return {
      type: GET_DATA_LOADING,
    };
  };
  
  
  export const getDataSuccess = (data) => {
    return {
      type: GET_DATA_SUCCESS,
      payload: data,
    };
  };
  
  
  export const getDataError = (err) => {
    return {
      type: GET_DATA_ERROR,
      payload: err,
    };
  };