import { Action } from 'redux';
import {
  GET_AUTH,
  RECEIVE_PERSONAL_SHEET,
  RECEIVE_WORK_SHEET
} from '../actions/stateActions';
import { RabbitState } from './types';

const initialState: RabbitState = {
  workGooglesheet: '',
  personalGooglesheet: '',
  isGoogleLoggedIn: false,
  isError: false,
  errorMessage: '',
  auth: {}
};

export default function counter(state = initialState, action: Action<string>) {
  switch (action.type) {
    case GET_AUTH:
      return { ...state, auth: action.auth, isGoogleLoggedIn: true };
    case RECEIVE_PERSONAL_SHEET:
      return {
        ...state,
        personalGooglesheet: action.spreadsheetId
      };
    case RECEIVE_WORK_SHEET:
      return {
        ...state,
        workGooglesheet: action.spreadsheetId
      };

    default:
      return state;
  }
}
