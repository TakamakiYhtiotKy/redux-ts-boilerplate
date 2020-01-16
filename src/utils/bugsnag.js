import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import React from 'react';

let isInitialized = false;

let bugsnagClient;
let ErrorBoundary;

const init = (appVersion, apiKey) => {

  bugsnagClient = bugsnag({
    apiKey,
    appVersion
  });

  bugsnagClient.use(bugsnagReact, React);

  ErrorBoundary = bugsnagClient.getPlugin('react');

  isInitialized = true;
};


export const getBugsnag = (appVersion, apiKey) => {

  if (!isInitialized) {
    init(appVersion, apiKey);
  }

  return {
    bugsnagClient,
    ErrorBoundary
  };
};