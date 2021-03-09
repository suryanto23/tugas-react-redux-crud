import axios from 'axios'
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getDataRequest = () => {

    return{
        type: GET_DATA_REQUEST
    }
};


export const getDataFailed = (error) => {

    return{
        type: GET_DATA_FAILED,
        error
    }
};


export const getDataSuccsess = (result) => {

    return{
        type: GET_DATA_SUCCESS,
        result
    }   
};

export const getDataPost = (val) => {

    return function (dispatch) {
        dispatch(getDataRequest());
    
        axios.post(`https://6023a8436bf3e6001766b514.mockapi.io/app-inventory` , {biodata : val})
        .then(result => dispatch(getData()) )
        .catch(error => dispatch(getDataFailed(error)))

    }
        
    };

export const getDataDelete = (id) => {

    return function (dispatch) {
        dispatch(getDataRequest());
    
        axios.delete(`https://6023a8436bf3e6001766b514.mockapi.io/app-inventory/${id}`)
        .then(result =>     dispatch(getData()) )
        .catch(error => dispatch(getDataFailed(error)))
        
        }
        
    };

export const getDataUpdate = (id , val) => {
    
    return function (dispatch) {
        dispatch(getDataRequest());
    
        axios.put(`https://6023a8436bf3e6001766b514.mockapi.io/app-inventory/${id}` , {biodata : val})
        .then(result =>   dispatch(getData()) )
        .catch(error => dispatch(getDataFailed(error)))

        } 
};


export const getData = () => {

    return function (dispatch) {
    dispatch(getDataRequest());

    axios.get("https://6023a8436bf3e6001766b514.mockapi.io/app-inventory")
    .then(result => dispatch(getDataSuccsess(result.data)))
    .catch(error => dispatch(getDataFailed(error)))
    
    }

}
