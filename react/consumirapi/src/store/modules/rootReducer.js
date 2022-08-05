import { combineReducers } from 'redux';

import auth from './auth/reducer';
// aqui pode importar outro reducer

export default combineReducers({
  auth,
  // segundo import
});
