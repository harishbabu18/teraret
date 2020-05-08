import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from "../components/ButtonComponent";
import useStyles from "./StylesComponent";
import { useFormik } from "formik";
import RegisterformFields from '../page/RegisterformFields';
import { fetch } from "../redux/register/registerActions";
import { useSelector,useDispatch } from 'react-redux';


const Form = ({children, ...otherProps}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const registerdata = useSelector(state => state.register )


    const formik = useFormik({
        initialValues: {
    
        },
        onSubmit: values => {
            alert (JSON.stringify(values))
            var values = JSON.stringify(values)
            dispatch(fetch(values))
        }
    })
    
    const {handleChange, values} = formik;
    return registerdata.loading ?(
        <div className={classes.root}>
        {/* <LinearProgress /> */}
      </div>
      ): registerdata.error ? (
      <h1>{registerdata.error}</h1>
        ) : (

        <div>
            <form className={classes.form} onSubmit={formik.handleSubmit} >
                <RegisterformFields
                    handleChange = {handleChange}
                    values = {values}
                />
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