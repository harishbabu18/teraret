import React from 'react';
import TextField from '@material-ui/core/TextField';

const Inputfields = ({name, idname, onChange, value, labelname, type, ...otherProps}) =>{
    return(
    <div>
        <TextField
            name= {name}
            type= {type}
            variant="outlined"
            // required
            fullWidth
            id= {idname}
            label= {labelname}
            onChange= {onChange}
            value = {value}
            autoFocus
        />
  </div>)
}

export default Inputfields;