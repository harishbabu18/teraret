import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../components/StylesComponent';

const LoadingComponent = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
          setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }
    
        const timer = setInterval(tick, 20);
        return () => {
          clearInterval(timer);
        };
      }, []);

    return (
        <div className={classes.root}>
            <CircularProgress variant="determinate" value={progress} color="secondary" />
        </div>
    )
}

export default LoadingComponent;