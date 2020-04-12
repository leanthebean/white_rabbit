import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { WHITE } from '../constants/colors';

const useStyles = makeStyles({
  button: (props: Props) => ({
    maxWidth: 500,
    minHeight: 35,
    backgroundColor: props.color || WHITE,
    borderRadius: 10,
    border: '1px solid black',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',

    color: 'black',
    fontSize: 12,
    padding: '5px 20px 5px 20px'
  }),
  hidden: {
    visibility: 'hidden'
  },
  visible: {
    visibility: 'visible'
  }
});

type Props = {
  text: string;
  navigate?: string;
  onClickAction?: () => void;
  color?: string;
  isVisible: boolean;
};
export default function Button(props: Props) {
  const classes = useStyles(props);
  const { onClickAction, text, navigate, isVisible } = props;
  return (
    <div className={isVisible ? classes.visible : classes.hidden}>
      {navigate ? (
        <NavLink
          to={{
            pathname: navigate
          }}
        >
          <button type="submit" className={classes.button}>
            {text}
          </button>
        </NavLink>
      ) : (
        <button
          onClick={onClickAction}
          type="submit"
          className={classes.button}
        >
          {text}
        </button>
      )}
    </div>
  );
}
