import {
  ADD_ITEM_TO_CART_PENDING, ADD_ITEM_TO_CART_SUCCESS
} from '../actions/shoppingcart'

export default(state = [], action) => {
  switch(action.type){
    case ADD_ITEM_TO_CART_PENDING:
      return state;
    case ADD_ITEM_TO_CART_SUCCESS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
