import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { Checkbox } from '@mui/material';

export default function ListItemSensor(props) {

    const [isSelected, setIsSelected] = React.useState(true);

    let color = 'white';

    if (props.hasAlarm && (Object.keys(props.lastMessage).length != 0)) {
        if (props.value >= props.lastMessage[props.signalsOfSelectedExhauster[props.index + 1]][0] ||
            props.value >= props.lastMessage[props.signalsOfSelectedExhauster[props.index + 2]][0]) {
                color = 'red';
            }
        if (props.value >= props.lastMessage[props.signalsOfSelectedExhauster[props.index + 3]][0] ||
            props.value >= props.lastMessage[props.signalsOfSelectedExhauster[props.index + 4]][0]) {
                color = 'yellow';
            }
    }

    return (
            <ListItem sx={{
                backgroundColor: '#fafafa',
                height : '30px',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
                <Checkbox defaultChecked onChange={()=>{
                    props.setSensor(prev=>{
                        prev[props.sensor] = !isSelected;
                        let next = {...prev};
                        return next;
                    });
                    setIsSelected(!isSelected);
                    }}/>
                <ListItemText primary={props.text}/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height:20,
                    width: 'max-content',
                    backgroundColor: {color},
                    borderRadius: '5px'
                }}>{props.value.toFixed(2)}</div>
            </ListItem>
    )
}