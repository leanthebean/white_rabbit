import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type rabbitStateType = {
  rabbit: RabbitState;
};

export type RabbitState = {
  isGoogleLoggedIn: boolean;
  isError: boolean;
  errorMessage: string;
  auth: object;
  workGooglesheet: string;
  personalGooglesheet: string;
};

export type GetState = () => rabbitStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<rabbitStateType, Action<string>>;
