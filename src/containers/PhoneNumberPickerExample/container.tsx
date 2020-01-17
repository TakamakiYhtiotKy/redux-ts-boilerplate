/* eslint-disable @typescript-eslint/no-empty-function */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/no-unresolved
import * as actions from '../../ducks/PhoneNumberPickerExample';

import Component from './component';

interface MyStateProps {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }
  

function mapStateToProps(): MyStateProps {
  return {
    isLoading: false,
    isError: false,
    isSuccess: false,
  };
}

interface MyDispatchProps {
    resetPhoneNumber: (phoneNumber: string) => void;
    savePhoneNumber: () => void;
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDispatchToProps(dispatch: any): MyDispatchProps{
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);