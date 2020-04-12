import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { GREEN } from '../constants/colors';

import rabbit from '../images/rabbit.svg';

const useStyles = makeStyles({
  img: {
    height: 38,
    position: 'relative'
  },

  container: {
    width: 50,
    height: 50,
    backgroundColor: GREEN,
    borderRadius: '50%'
    // float: 'right'
  },

  emoji: {
    marginLeft: 10
  },

  subTitle: {
    color: 'black',
    fontWeight: 'bold',
    padding: 0,
    fontSize: 16,
    marginTop: 5
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    padding: 0,
    marginBottom: 25
  },

  paper: {
    position: 'relative',
    top: 10,
    right: 145,
    width: 400,
    borderRadius: 10,
    border: '2px solid black',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    outline: 0,
    padding: 50,
    backgroundColor: GREEN
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: GREEN,
    borderRadius: '50%',
    borderWidth: 0
  },

  paperContainer: {
    display: 'flex'
  },

  polygon: {
    strokeWidth: 1
  },
  svg: {
    width: 100,
    height: 100
  }
});

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
    // const win = require('electron').remote.getCurrentWindow();
    // win.setSize(400, 400);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.container}>
      <button onClick={handleOpen} type="submit" className={classes.button}>
        <img className={classes.img} src={rabbit} alt="" />
      </button>
      <div className={classes.paperContainer}>
        <Fade in={open}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg>
          </Paper>
        </Fade>
      </div>
    </div>
  );
}
