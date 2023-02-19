import { ListItemButton, ListItemText } from "@mui/material"
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Collapse from '@mui/material/Collapse';
import ListItemSensor from "./ListItemSensor";

import * as React from 'react';

export default function ListItemButtonNested(props) {
    const [open, setOpen] = React.useState(false)

    const handleClick = ()=>{
        setOpen(!open);
    }

    return (<>
        <ListItemButton sx={{ pl: 2 }} onClick={handleClick}>
            <ListItemText sx={{ml : '5px'}} primary={props.top_text} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            {props.credentials.map(
                (item, index)=>(
                    <ListItemSensor
                        signalsOfSelectedExhauster={props.signalsOfSelectedExhauster}
                        lastMessage={props.lastMessage}
                        key={index}
                        text={item[0]}
                        value={item[1]}
                        sensor={item[2]}
                        setSensor={item[3]}
                        index={item[4]}
                        hasAlarm={item[5]}
                    />
                )
            )}
        </Collapse>
    </>)
}