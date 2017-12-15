import axios from 'axios';

export const ADD_ITEM_TO_CART_PENDING = 'ADD_ITEM_TO_CART_PENDING';
export const ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS';

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
