/* eslint-disable @typescript-eslint/explicit-function-return-type */
// https://github.com/erikras/ducks-modular-redux
// https://github.com/alexnm/re-ducks

export interface StateInterface {
    phonenumber?: string;
    isError?: boolean;
    isSuccess?: boolean;
    isLoading?: boolean;
  }

const initialState = {
  phonenumber: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
};

// Actions
const SAVE_PHONENUMBER = 'SAVE_PHONENUMBER';
const RESET_PHONENUMBER = 'RESET_PHONENUMBER';

interface SavePhoneNumberInterface {
    type: typeof SAVE_PHONENUMBER;
    phonenumber?: string;
}
  
interface ResetPhoneNumberInterface {
    type: typeof RESET_PHONENUMBER;
}

interface ActionsMapInterface {
    [SAVE_PHONENUMBER]: (state: StateInterface, action: SavePhoneNumberInterface) => StateInterface;
    [RESET_PHONENUMBER]: () => StateInterface;
}

// Reducer
const actionsMap: ActionsMapInterface = {
  [SAVE_PHONENUMBER]: (state: StateInterface, action: SavePhoneNumberInterface) => {
    return {
      ...state,
      phonenumber: action.phonenumber,
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
};

type actionTypes = SavePhoneNumberInterface | ResetPhoneNumberInterface

export default (state = initialState, action: actionTypes) => {
  const reduceFn: Function = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};


interface ActionCreatorInterface {
    type: string;
}

// Action Creators
export function resetPhoneNumber(): ActionCreatorInterface {
  return { type: RESET_PHONENUMBER };
}

export function savePhoneNumber(phonenumber?: string): SavePhoneNumberInterface {
  return { type: SAVE_PHONENUMBER, phonenumber };
}
  
// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return (dispatch: (arg0: any) => any) => get('/widget').then((widget: any) => dispatch(updateWidget(widget)));
// }