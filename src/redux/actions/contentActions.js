import httpHandler from './../httpHandler';
import {
  API_DUMMY,
    GET_ALL_CONTENT
} from '../constants';



export const getAllContent = (dispatch) => {
  httpHandler.get(API_DUMMY)
    .then((response) => {
        console.log("DP response = "+JSON.stringify(response.data));
      dispatch({
        type: GET_ALL_CONTENT,
        payload: {
          "allContent": response.data
        }
      })
    })
};


