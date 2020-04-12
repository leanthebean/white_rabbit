import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

import { GetState, Dispatch } from '../reducers/types';

const http = require('http');
const opn = require('open');
const destroyer = require('server-destroy');

const { google } = require('googleapis');

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const GET_AUTH = 'GET_AUTH';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

const keys = { redirect_uris: [''] };

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  keys.redirect_uris[0]
);

google.options({ auth: oauth2Client });

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export const getAuth = auth => {
  return {
    type: GET_AUTH,
    auth
  };
};

export const receivedError = (errorMessage: string) => {
  return {
    type: RECEIVE_ERROR,
    errorMessage
  };
};

export function incrementAsync(delay = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function signInGoogle() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
  return async (dispatch: Dispatch) => {
    const myApiOauth = new ElectronGoogleOAuth2(
      process.env.CLIENT_ID || '',
      process.env.CLIENT_SECRET || '',
      scopes
    );

    myApiOauth
      .openAuthWindowAndGetTokens()
      .then(token => {
        dispatch(getAuth(token));
        // use your token.access_token
        return null;
      })
      .catch(error => {
        receivedError(error);
      });
  };
}
