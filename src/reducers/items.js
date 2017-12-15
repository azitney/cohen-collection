import {
  GET_ITEMS_PENDING, GET_ITEMS_SUCCESS, REMOVE_ITEM_PENDING, REMOVE_ITEM_SUCCESS, EDIT_ITEM_PENDING, EDIT_ITEM_SUCCESS, ADD_ITEM_PENDING, ADD_ITEM_SUCCESS
} from '../actions/items'

export default(state = [], action) => {
  switch(action.type){
    case GET_ITEMS_PENDING:
      return state;
    case GET_ITEMS_SUCCESS:
      return [...action.payload.data];
    case REMOVE_ITEM_PENDING:
      return state;
    case REMOVE_ITEM_SUCCESS:
      return [...action.payload.data];
    case EDIT_ITEM_PENDING:
      return state;
    case EDIT_ITEM_SUCCESS:
      return [...action.payload.data];
    case ADD_ITEM_PENDING:
      return state;
    case ADD_ITEM_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
