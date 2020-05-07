import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./StylesComponent";

const Buttons = ({color, label, type, ...otherProps}) =>{
    const classes = useStyles();
    return(
    <div>
        <Button
            type={type}
            fullWidth
            variant="contained"
            color={color}
            className={classes.submit}
        >
            {label}
        </Button>
  </div>)
}

export default Buttons;