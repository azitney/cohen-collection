import axios from 'axios';

export const ADD_ITEM_TO_CART_PENDING = 'ADD_ITEM_TO_CART_PENDING';
export const ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS';
export const REMOVE_CARTITEM_PENDING = 'REMOVE_CARTITEM_PENDING';
export const REMOVE_CARTITEM_SUCCESS = 'REMOVE_CARTITEM_SUCCESS';

export const addItem = (id) =>{
  return async(dispatch) => {
    dispatch({type: ADD_ITEM_TO_CART_PENDING})
      let shoppingcartitem = await axios.get(`http://localhost:8000/${id}`)
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: shoppingcartitem
      })
    }
  }

  export const removeCartItem = (id) => {
    return async (dispatch) => {
      dispatch({type: REMOVE_CARTITEM_PENDING})
        let shoppingcartitem = await axios.get(`http://localhost:8000/${id}`)
      dispatch({
        type: REMOVE_CARTITEM_SUCCESS,
        payload: shoppingcartitem
      })
    }
  }
