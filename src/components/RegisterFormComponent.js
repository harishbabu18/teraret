import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from "../components/ButtonComponent";
import useStyles from "./StylesComponent";

const Form = ({children, ...otherProps}) =>{
    const classes = useStyles();
    
    return(

        <div>
            <form className={classes.form} noValidate>
                {children}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    label= "Sign Up"
                />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Form;