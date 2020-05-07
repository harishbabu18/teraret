import React from 'react';
import TextField from '@material-ui/core/TextField';

const Inputfields = ({name, idname, labelname,type, ...otherProps}) =>{
    return(
    <div>
        <TextField
            name= {name}
            type= {type}
            variant="outlined"
            required
            fullWidth
            id= {idname}
            label= {labelname}
            autoFocus
        />
  </div>)
}

export default Inputfields;