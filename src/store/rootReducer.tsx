import { combineReducers } from 'redux';
// import * as reducers from './ducks'

export default () => {

  const appReducer = combineReducers({});

  const rootReducer = (state : any, action : any) => {
    if (action.type === 'LOGOUT') { // TODO: Replace with constant
      state = undefined;
    }
    return appReducer(state, action);
  };

  return rootReducer;
};
