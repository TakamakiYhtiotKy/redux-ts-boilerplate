/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from '../component';

// eslint-disable-next-line no-unused-vars
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({});


describe('PhoneNumberPickerExample', () => {
  it('Should render (smoke test)', () => {
    const { asFragment } = render(
      <MuiThemeProvider theme={theme}>
        <Component />
      </MuiThemeProvider>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });

  it('Should render loading (smoke test)', () => {
    const { asFragment } = render(
      <MuiThemeProvider theme={theme}>
        <Component
          isLoading={true}
        />
      </MuiThemeProvider>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });

  it('Should render error (smoke test)', () => {
    const { asFragment } = render(
      <MuiThemeProvider theme={theme}>
        <Component
          isError={true}
        />
      </MuiThemeProvider>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });

  it('Should render success (smoke test)', () => {
    const { asFragment } = render(
      <MuiThemeProvider theme={theme}>
        <Component
          isSuccess={true}
        />
      </MuiThemeProvider>,
    );
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot();
  });


  it('Should enter phone number and then reset it', () => {
    const { queryByTestId, getByTestId } = render(
      <MuiThemeProvider theme={theme}>
        <Component
          resetPhoneNumber={() => {}}
          savePhoneNumber={() => {}}
        />
      </MuiThemeProvider>,
    );

    // Expect no status messages to be rendered at first
    expect(queryByTestId('success_message')).toBeNull();
    expect(queryByTestId('error_message')).toBeNull();


    // Change phone number
    fireEvent.change(queryByTestId('phonenumber_field'), { target: { value: '0400 341 543' } });

    expect(queryByTestId('phonenumber_field').value).toBe('0400 341 543');

    // Expect buttons to be clickable
    fireEvent.click(getByTestId(/save_button/i));
    fireEvent.click(getByTestId(/reset_button/i));

    expect(queryByTestId('phonenumber_field').value).toBe('');

  });
});