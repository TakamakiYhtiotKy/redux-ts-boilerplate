import { all } from 'redux-saga/effects';
import { Reducer } from 'redux';
import phoneNumberPicker from './PhoneNumberPickerExample';

interface ReducerMapInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    phoneNumberPicker: Reducer<unknown, any>;
}

const reducerMap: ReducerMapInterface = {
  phoneNumberPicker: phoneNumberPicker.reducer,
  // Add reducers for each duck here
};

export default reducerMap;


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* sagas() {
  yield all([
    phoneNumberPicker.rootSaga(),
    // Add sagas for each duck here
  ]);
}