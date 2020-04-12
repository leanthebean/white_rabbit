import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { rabbitStateType } from '../reducers/types';
import {
  signInGoogle,
  createWorkSheet,
  createPersonalSheet,
  setSettings
} from '../actions/stateActions';

function mapStateToProps(state: rabbitStateType) {
  return {
    state: state.rabbit
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      signInGoogle,
      createWorkSheet,
      createPersonalSheet,
      setSettings
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
