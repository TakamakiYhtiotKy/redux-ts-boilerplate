/* eslint-disable @typescript-eslint/explicit-function-return-type */
// https://github.com/erikras/ducks-modular-redux
// https://github.com/alexnm/re-ducks

import { put, takeEvery, all, call } from 'redux-saga/effects';
import { Reducer } from 'redux';

interface StateInterface {
    phonenumber?: string;
    isError?: boolean;
    isSuccess?: boolean;
    isLoading?: boolean;
}

// Actions
const SAVE_PHONENUMBER_START = 'SAVE_PHONENUMBER_START';
const RESET_PHONENUMBER = 'RESET_PHONENUMBER';
const SAVE_PHONENUMBER_SUCCESS = 'SAVE_PHONENUMBER_SUCCESS';
const SAVE_PHONENUMBER_ERROR = 'SAVE_PHONENUMBER_ERROR';

interface SavePhoneNumberSuccessInterface {
    type: typeof SAVE_PHONENUMBER_SUCCESS;
    phonenumber?: string;
}

interface ResetPhoneNumberInterface {
    type: typeof RESET_PHONENUMBER;
}

interface SavePhoneNumberStartInterface {
  type: typeof SAVE_PHONENUMBER_START;
  phonenumber?: string;
}

interface SavePhoneNumberErrorInterface {
  type: typeof SAVE_PHONENUMBER_ERROR;
}

interface ActionsMapInterface {
    [SAVE_PHONENUMBER_START]: (state: StateInterface, action: SavePhoneNumberStartInterface) => StateInterface;
    [SAVE_PHONENUMBER_SUCCESS]: (state: StateInterface, action: SavePhoneNumberSuccessInterface) => StateInterface;
    [RESET_PHONENUMBER]: () => StateInterface;
    [SAVE_PHONENUMBER_ERROR]: () => StateInterface;
}


type actionTypes = SavePhoneNumberSuccessInterface | ResetPhoneNumberInterface

interface ActionCreatorInterface {
    type: string;
}

const initialState = {
  phonenumber: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
};


// Reducer
const actionsMap: ActionsMapInterface = {
  [SAVE_PHONENUMBER_START]: (state: StateInterface) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isError: false,
    };
  },
  [RESET_PHONENUMBER]: () => {
    return {
      isError: false,
      isSuccess: false,
      isLoading: false,
      phonenumber: '',
    };
  },
  [SAVE_PHONENUMBER_SUCCESS]: (state: StateInterface, action: SavePhoneNumberSuccessInterface) => {
    return {
      isSuccess: true,
      isError: false,
      isLoading: false,
      phonenumber: action.phonenumber,
    };
  },
  [SAVE_PHONENUMBER_ERROR]: () => {
    return {
      isSuccess: false,
      isError: true,
      isLoading: false,
    };
  },
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer: Reducer<unknown, any> = (state = initialState, action: actionTypes) => {
  const reduceFn: Function = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};

// Action Creators
export function resetPhoneNumber(): ActionCreatorInterface {
  return { type: RESET_PHONENUMBER };
}

export function savePhoneNumber(phonenumber?: string): SavePhoneNumberStartInterface {
  return { type: SAVE_PHONENUMBER_START, phonenumber };
}

// Sagas for side-effects

const delay = (ms: number) => new Promise(
  (resolve, reject) => {

    // 50% chance of success
    // This is a side-effect as it is unpredictable
    const isSuccess = !!Math.round(Math.random());

    if (isSuccess) {
      setTimeout(resolve, ms);
    } else {
      setTimeout(reject, ms);
    }

  },
);


function* savePhoneNumberStart(action: SavePhoneNumberStartInterface) {
  try {
    yield call(delay, 1000);
    yield put({ type: SAVE_PHONENUMBER_SUCCESS, phonenumber: action.phonenumber });
  } catch (e) {
    yield put({ type: SAVE_PHONENUMBER_ERROR });
  }
}

function* watchSavePhoneNumberAsync() {
  yield takeEvery(SAVE_PHONENUMBER_START, savePhoneNumberStart);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
  yield all([
    watchSavePhoneNumberAsync(),
  ]);
}


export default {
  reducer,
  rootSaga,
};