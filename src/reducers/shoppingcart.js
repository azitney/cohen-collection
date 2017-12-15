import {
  ADD_ITEM_TO_CART_PENDING, ADD_ITEM_TO_CART_SUCCESS, REMOVE_CARTITEM_PENDING, REMOVE_CARTITEM_SUCCESS
} from '../actions/shoppingcart'

export default(state = [], action) => {
  switch(action.type){
    case ADD_ITEM_TO_CART_PENDING:
      return state;
    case ADD_ITEM_TO_CART_SUCCESS:
      return [...state, ...action.payload.data];
    case REMOVE_CARTITEM_PENDING:
      return state;
    case REMOVE_CARTITEM_SUCCESS:
      let cartItems = state.filter((item)=> item.id != action.payload.data[0].id)
      return [...cartItems];
    default:
      return state;
  }
}
