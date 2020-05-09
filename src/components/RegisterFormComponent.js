import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CustomButton from "../components/ButtonComponent";
import useStyles from "./StylesComponent";
import { useFormik } from "formik";
import RegisterformFields from '../page/RegisterformFields';
import { post } from "../redux/register/registerActions";
import { useSelector,useDispatch } from 'react-redux';
import ErrorComponent from '../components/ErrorComponent';
import LoadingComponent from '../components/LoadingComponent';

const Form = ({address, ...otherProps}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const registerdata = useSelector(state => state.register )

    const formik = useFormik({
        initialValues: {
    
        },
        onSubmit: values => {
            var values = JSON.stringify(values)
            var addres = {address}
            dispatch(post(values, addres))
        }
    })
    
    const {handleChange, values} = formik;
    return (
            registerdata.loading ? (
              <LoadingComponent />
            ) :
            registerdata.error ? (
                <div>
                    <ErrorComponent registerdata = {registerdata} />
                </div>
            ) : (
            <div>

                <form className={classes.form} onSubmit={formik.handleSubmit} >

                    <RegisterformFields
                        handleChange = {handleChange}
                        values = {values}
                    />

                    <CustomButton
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
        )
}

export default Form;