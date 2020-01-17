import React, { useState, ChangeEvent } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import * as R from 'ramda';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme: Theme) => ({
  
  container: {
    margin: theme.spacing(2),
  },
  buttonRoot: {
    marginTop: theme.spacing(2),
    position: 'relative',
  },
  circularProgress: {
    position: 'absolute',
    top: '6px',
    left: '23px',
  },
  statusMsg: {
    marginTop: theme.spacing(2),
  },

}));

export interface PhoneNumberPickerExampleProps {
    isLoading?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    savePhoneNumber: Function;
    resetPhoneNumber: Function;
}

const PhoneNumberPickerExample: React.SFC<PhoneNumberPickerExampleProps> = ({
  savePhoneNumber, resetPhoneNumber, isLoading, isError, isSuccess,
}) => {

  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState('');
  

  return (
    <div className={classes.container}>
      <TextField
        disabled={isLoading}
        label="Enter your phone number:"
        onChange={(e: ChangeEvent): void => setPhoneNumber(R.path(['target', 'value'], e) || '')}
        placeholder={'+358 555 555 555'}
        value={phoneNumber}
      />
      <Grid direction="column" container>
        <Grid item>
          <Button
            disabled={isLoading || !phoneNumber}
            classes={{ root: classes.buttonRoot }}
            variant="contained"
            color="primary"
            onClick={(): void => savePhoneNumber(phoneNumber)}
          >
            Save
            {isLoading && <CircularProgress className={classes.circularProgress} size={24}/>}
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={(): void => resetPhoneNumber()}
            disabled={isLoading}
            classes={{ root: classes.buttonRoot }}
            variant="contained"
            color="secondary"
          >
            Reset
          </Button>
        </Grid>
        {isError && (
          <Grid item>
            <Typography color="error" className={classes.statusMsg}>Oh no, something went wrong!</Typography>
          </Grid>)
        }
        {isSuccess && (
          <Grid item>
            <Typography className={classes.statusMsg}>Phone number saved succesfully!</Typography>
          </Grid>)
        }
      </Grid>
    </div>
  );
};
 
export default PhoneNumberPickerExample;