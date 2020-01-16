import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import './styles/App.css';
import theme from './styles/theme'
import configureStore from './store/configureStore'
import { getBugsnag } from './utils/bugsnag'
import { appVersion } from './constants'

const { ErrorBoundary } = getBugsnag(appVersion, 'TODO: Add API KEY');

const store = configureStore();

const App: React.FC = () => {
  return (
    <ErrorBoundary>    
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          Hello world!
        </MuiThemeProvider>
      </Provider>
    </ErrorBoundary>

  );
}

export default App;
