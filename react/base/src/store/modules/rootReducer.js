import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';
// aqui pode importar outro reducer

export default combineReducers({
  example: exampleReducer,
  // segundo import
});
