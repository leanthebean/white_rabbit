import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { SettingsOutlined } from '@material-ui/icons';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from './Button';

import { LIGHT_GREEN, GREEN, PURPLE, BLUE, WHITE } from '../constants/colors';

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    top: 70,
    left: 70,
    width: 400,
    height: 500,
    borderRadius: 10,
    border: '0.5px solid black',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    outline: 0,
    backgroundColor: LIGHT_GREEN,
    paddingTop: 15,
    paddingLeft: 25
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
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 24,
    cursor: 'pointer'
  },
  textfield: {
    width: '90%'
  }
});

type Props = {
  onClickSettings: () => void;
  onClickShipIt: () => void;
};
export default function MainView(props: Props) {
  const classes = useStyles(props);
  const { onClickSettings, onClickShipIt } = props;

  const onClickSipItButton = () => {
    // clear state
    onClickShipIt();
  };

  return (
    <div>
      <Paper elevation={4} className={classes.paper}>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="work"
        >
          <FormControlLabel value="work" control={<Radio />} label="Work" />

          <FormControlLabel
            value="personal"
            control={<Radio />}
            label="Personal"
          />
        </RadioGroup>
        <SettingsOutlined onClick={onClickSettings} className={classes.icon} />
        <br />
        <Typography className={classes.title}>What did you do?</Typography>
        <br />

        <TextField
          multiline
          type="text"
          rows={8}
          variant="outlined"
          fullWidth
          className={classes.textfield}
        />
        <br />
        <br />
        <Typography className={classes.title}>Tags</Typography>
        <br />
        <TextField
          multiline
          type="text"
          rows={1}
          variant="outlined"
          fullWidth
          className={classes.textfield}
        />
        <br />
        <br />

        <Button
          color={GREEN}
          onClickAction={onClickSipItButton}
          text="Ship it!"
          isVisible
        />
      </Paper>
    </div>
  );
}
