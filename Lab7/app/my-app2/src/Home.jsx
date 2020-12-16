import React from 'react';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import ChildCare from '@material-ui/icons/ChildCare';
import Divider from '@material-ui/core/Divider';

function Home() {
    return (
        <div>
            <Slider value={30} aria-labelledby="continuous-slider" />
            <br />
            <br />
            <Divider />
            <br />
            <Checkbox checked={true} inputProps={{ 'aria-label': 'primary checkbox' }}/>
            <Checkbox checked={false} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
            <br />
            <br />
            <Divider />
            <br />
            <ChildCare />
        </div>
    )
}

export default Home

