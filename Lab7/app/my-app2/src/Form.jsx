import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';


function Form() {
    return (
        <div>
            <Button variant="contained" color="secondary">Secondary</Button>
            <br />
            <br />
            <Divider />
            <br />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <br />
            <br />
            <Divider />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={true}>
                    <FormControlLabel value="female" control={<Radio checked = {true}/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Form
