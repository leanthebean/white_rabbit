import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

import { GetState, Dispatch } from '../reducers/types';

export const GET_AUTH = 'GET_AUTH';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_PERSONAL_SHEET = 'RECEIVE_PERSONAL_SHEET';
export const RECEIVE_WORK_SHEET = 'RECEIVE_WORK_SHEET';

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

export const receivedPersonalSheet = (spreadsheetId: string) => {
  return {
    type: RECEIVE_PERSONAL_SHEET,
    spreadsheetId
  };
};

export const receivedWorkSheet = (spreadsheetId: string) => {
  return {
    type: RECEIVE_WORK_SHEET,
    spreadsheetId
  };
};

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
export function createPersonalSheet() {
  return async (dispatch: Dispatch, state: GetState) => {
    const url =
      'https://sheets.googleapis.com/v4/spreadsheets?fields=properties%2Ftitle%2CspreadsheetId';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state().rabbit.auth.access_token}`
      },
      body: JSON.stringify({
        properties: { title: 'Personal White Rabbit Task Tracker' }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(receivedPersonalSheet(json.spreadsheetId));
        return null;
      })
      .catch(errorResp => {
        // eslint-disable-next-line no-console
        console.error(errorResp);
        dispatch(
          receivedError('Something went wrong on our side – please contact us.')
        );
      });
  };
}

export function createWorkSheet() {
  return async (dispatch: Dispatch, state: GetState) => {
    const url =
      'https://sheets.googleapis.com/v4/spreadsheets?fields=properties%2Ftitle%2CspreadsheetId';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state().rabbit.auth.access_token}`
      },
      body: JSON.stringify({
        properties: { title: 'Work White Rabbit Task Tracker' }
      })
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receivedWorkSheet(json.spreadsheetId));
        return null;
      })
      .catch(errorResp => {
        // eslint-disable-next-line no-console
        console.error(errorResp);
        dispatch(
          receivedError('Something went wrong on our side – please contact us.')
        );
      });
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

export function setSettings(workId: string, personalId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(receivedPersonalSheet(personalId));
    dispatch(receivedWorkSheet(workId));
  };
}
