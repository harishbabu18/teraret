import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import useStyles from '../components/StylesComponent';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ErrorComponent = ({registerdata}) => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
      };

    return registerdata.error ? (
        <div className={classes.root}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title" color="Red">
                    Error..!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Alert variant="filled" severity="error">
                            {registerdata.error}
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
        ) : null
    
}

export default ErrorComponent;