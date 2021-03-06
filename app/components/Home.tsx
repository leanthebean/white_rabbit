import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import Login from './Login';
import Settings from './Settings';
import MainView from './MainView';

import Button from './Button';
import { BLUE, GREEN, LIGHT_PURPLE, PURPLE } from '../constants/colors';

import rabbit from '../images/rabbit.svg';

import { RabbitState } from '../reducers/types';

const el = require('electron');

const useStyles = makeStyles({
  img: {
    height: 38,
    position: 'relative'
  },
  center: {
    textAlign: 'center',
    marginTop: 100
  },
  container: {
    width: 50,
    height: 50,
    float: 'right'
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: GREEN,
    borderRadius: '50%',
    borderWidth: 0,
    float: 'right'
  },
  paperContainer: {
    display: 'flex'
  }
});

type Props = {
  state: RabbitState;
  signInGoogle: () => void;
  createWorkSheet(): () => void;
  createPersonalSheet(): () => void;
  setSettings(): (workId: string, personalId: string) => void;
};

export default function Home(props: Props) {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);
  const [openMainView, setOpenMainView] = React.useState(false);

  const {
    state,
    createWorkSheet,
    createPersonalSheet,
    signInGoogle,
    setSettings
  } = props;

  const win = el.remote.getCurrentWindow();
  const handleNewRow = () => {};
  const googleLogin = () => {
    setOpenSettings(true);
    setOpenLogin(false);
    signInGoogle();
  };

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  const handleOpenSettings = () => {
    setOpenSettings(true);
    setOpenLogin(false);
    setOpenMainView(false);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };

  const handleOpen = () => {
    if (!state.isGoogleLoggedIn) {
      if (openLogin) {
        handleClose();
        return;
      }
      setOpenLogin(true);
    } else {
      if (openMainView) {
        setOpenMainView(false);
        return;
      }
      setOpenMainView(true);
    }
  };

  const handleMouse = () => {
    win.setIgnoreMouseEvents(false);
  };

  const handleMouseLeave = () => {
    win.setIgnoreMouseEvents(true, { forward: true });
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={handleOpen} type="submit" className={classes.button}>
        <img draggable="false" className={classes.img} src={rabbit} alt="" />
      </button>
      <div className={classes.paperContainer}>
        <Fade in={!state.isGoogleLoggedIn && openLogin}>
          <div>
            <Login onClickAction={googleLogin} />
          </div>
        </Fade>
        <Fade in={openSettings}>
          <div>
            <Settings
              statePersonalGooglesheet={state.personalGooglesheet}
              stateWorkGooglesheet={state.workGooglesheet}
              onClickAction={handleCloseSettings}
              onClickCreateWorkSheet={createWorkSheet}
              onClickCreatePersonalSheet={createPersonalSheet}
              onClickSetSettings={setSettings}
            />
          </div>
        </Fade>
        <Fade in={openMainView}>
          <div>
            <MainView
              onClickShipIt={handleNewRow}
              onClickSettings={handleOpenSettings}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
