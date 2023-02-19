import * as React from 'react';
import ListItemButtonNested from './ListItemButtonNested';
import { ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

export default function ListItemButtonTop(props) {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <>
            <ListItemButton sx={{ pl: 0 }} onClick={handleClick}>
            <ListItemText sx={{ml : '5px'}} primary={props.topic} />
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {props.top_credentials.map((item, index)=>(
                    <ListItemButtonNested
                    lastMessage={props.lastMessage}
                    signalsOfSelectedExhauster={props.signalsOfSelectedExhauster}
                    key={index}
                    credentials={item.credentials}
                    top_text={item.top_text}/>
                ))}
            </Collapse>
        </>
    )
}