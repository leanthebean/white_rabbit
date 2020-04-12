import { Action } from 'redux';
import { GET_AUTH } from '../actions/stateActions';
import { RabbitState } from './types';

const initialState: RabbitState = {
  isGoogleLoggedIn: false,
  isError: false,
  errorMessage: '',
  auth: {}
};

export default function counter(state = initialState, action: Action<string>) {
  switch (action.type) {
    case GET_AUTH:
      return { ...state, auth: action.auth, isGoogleLoggedIn: true };

    default:
      return state;
  }
}
