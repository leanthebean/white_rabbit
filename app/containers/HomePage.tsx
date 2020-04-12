import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { rabbitStateType } from '../reducers/types';
import { signInGoogle } from '../actions/stateActions';

function mapStateToProps(state: rabbitStateType) {
  return {
    state: state.rabbit
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      signInGoogle
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
