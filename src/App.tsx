import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './theme'


const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
          Hello world!
      </MuiThemeProvider>
    </div>
  );
}

export default App;
