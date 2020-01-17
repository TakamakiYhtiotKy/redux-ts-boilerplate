/* eslint-disable @typescript-eslint/no-empty-function */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as R from 'ramda';

// eslint-disable-next-line import/no-unresolved
import { resetPhoneNumber, savePhoneNumber } from '../../ducks/PhoneNumberPickerExample';

import Component from './component';

interface MyStateProps {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }
  

function mapStateToProps(state: MyStateProps): MyStateProps {
  return {
    isLoading: R.path(['phoneNumberPicker', 'isLoading'], state) || false,
    isError: R.path(['phoneNumberPicker', 'isError'], state) || false,
    isSuccess: R.path(['phoneNumberPicker', 'isSuccess'], state) || false,
  };
}

interface MyDispatchProps {
    resetPhoneNumber: (phoneNumber: string) => void;
    savePhoneNumber: () => void;
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDispatchToProps(dispatch: any): MyDispatchProps{
  return bindActionCreators({ resetPhoneNumber, savePhoneNumber }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);