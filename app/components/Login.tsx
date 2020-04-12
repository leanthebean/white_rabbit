import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from './Button';
import { GREEN, LIGHT_PURPLE, PURPLE, BLUE, WHITE } from '../constants/colors';

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    top: 70,
    left: 70,
    width: 400,
    height: 400,
    borderRadius: 10,
    border: '0.5px solid black',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    outline: 0,
    backgroundColor: LIGHT_PURPLE
  },
  center: {
    textAlign: 'center',
    marginTop: 100
  }
});

type Props = {
  onClickAction?: () => void;
};
export default function Login(props: Props) {
  const classes = useStyles(props);
  const { onClickAction } = props;
  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        <div className={classes.center}>
          <Button
            color={BLUE}
            onClickAction={onClickAction}
            text="Login with Google"
            isVisible
          />
        </div>
      </Paper>
    </div>
  );
}
