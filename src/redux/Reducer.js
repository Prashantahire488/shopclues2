import {
    GET_DATA_ERROR,
    GET_DATA_LOADING,
    GET_DATA_SUCCESS
}
from './ActionTypes';

const init = {
    todos: [],
  };
  
  
  export const reducer = (state = init, { type, payload,id }) => {
    switch (type) {
      case GET_DATA_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_DATA_SUCCESS:
        return {
          ...state,
          todos: payload,
          loading: false,
        };
  
      case GET_DATA_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
      
      default:
        return state;
    }
  };