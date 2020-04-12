import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Close } from '@material-ui/icons';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import Button from './Button';

import { LIGHT_GREEN, GREEN, PURPLE, BLUE, WHITE } from '../constants/colors';

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
    backgroundColor: LIGHT_GREEN
  },
  input: {
    borderBottom: '1px solid black',
    width: '85%',
    marginBottom: 20
  },
  container: {
    marginLeft: 26,
    marginBottom: 40,
    marginTop: 20
  },

  subTitle: {
    color: 'black',
    padding: 0,
    fontSize: 12,
    marginTop: 5
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  icon: {
    position: 'relative',
    top: 5,
    right: 5,
    fontSize: 22,
    cursor: 'pointer'
  }
});

type Props = {
  onClickAction?: () => void;
};
export default function Settings(props: Props) {
  const classes = useStyles(props);
  const workGooglesheet = useRef(null);
  const personalGooglesheet = useRef(null);
  const { onClickAction } = props;
  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        <Grid className={classes.container} container spacing={0}>
          <Grid item sm={2}>
            <Close className={classes.icon} onClick={onClickAction} />
          </Grid>
          <Grid item sm={10}>
            <Typography className={classes.title}>Settings</Typography>
          </Grid>
        </Grid>

        <Grid className={classes.container} container spacing={0}>
          <Grid item sm={2}>
            <Typography className={classes.subTitle}>
              Work Googlesheet:
            </Typography>
          </Grid>
          <Grid item sm={10} container spacing={0}>
            <Input
              inputRef={workGooglesheet}
              className={classes.input}
              disableUnderline
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item sm={4}>
            <Button
              color={GREEN}
              // onClickAction={onClickAction}
              text="Create Work Sheet For Me"
              isVisible
            />
          </Grid>
        </Grid>

        <Grid className={classes.container} container spacing={0}>
          <Grid item sm={2}>
            <Typography className={classes.subTitle}>
              Personal Googlesheet:
            </Typography>
          </Grid>
          <Grid item sm={10} container spacing={0}>
            <Input
              inputRef={personalGooglesheet}
              className={classes.input}
              disableUnderline
              fullWidth
            />
          </Grid>

          <Grid item sm={4}>
            <Button
              color={GREEN}
              // onClickAction={onClickAction}
              text="Create Personal Sheet For Me"
              isVisible
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
