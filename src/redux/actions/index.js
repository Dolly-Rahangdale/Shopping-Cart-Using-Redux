import * as actionTypes from './actionTypes';

export const ADD =(product)=>{
    return{
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}

// Remove Items 
export const REMOVE = (id) => {
    return{
        type: actionTypes.REMOVE_PRODUCT,
        payload: id
    }
}

export const REMOVEONEITEM = (product) => {
    return {
        type: actionTypes.RMV_ONE,
        payload: product
    }
}
