import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
});

export default rootReducer;
