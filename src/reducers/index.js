import { combineReducers } from 'redux';
import items from './items';
import shoppingcart from './shoppingcart';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  items,
  shoppingcart,
  form: formReducer
})
export default rootReducer;
