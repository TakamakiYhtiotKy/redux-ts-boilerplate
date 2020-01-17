import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import './styles/App.css';
// eslint-disable-next-line import/no-unresolved
import theme from './styles/theme';
import configureStore from './store/configureStore';
import { getBugsnag } from './utils/bugsnag';
// eslint-disable-next-line import/no-unresolved
import { appVersion } from './constants';

// eslint-disable-next-line import/no-unresolved
import PhoneNumberPickerExample from './containers/PhoneNumberPickerExample';

const { ErrorBoundary } = getBugsnag(appVersion, 'TODO: Add API KEY');

const store = configureStore();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <PhoneNumberPickerExample />
        </MuiThemeProvider>
      </Provider>
    </ErrorBoundary>

  );
};

export default App;
