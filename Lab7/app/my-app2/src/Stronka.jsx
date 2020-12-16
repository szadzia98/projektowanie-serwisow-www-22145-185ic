import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function Stronka(props) {
    return (
        <div>
            <Avatar alt="Remy Sharp" src="https://filing.pl/wp-content/uploads/2014/06/filing_images_ddad50a54790.png" />
            <br/>
            <br />
            <Divider />
            <br />
            <List>
            {props.data.map((element,idx,arr)=>{
                return(
                    <ListItem selected key={idx}>
                        <ListItemText primary={element.pierwszy} />
                    </ListItem>
                )
            })}
            </List>

        </div>
    )
}

export default Stronka
