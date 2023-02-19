import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WarningIcon from '@mui/icons-material/Warning';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SensorsIcon from '@mui/icons-material/Sensors';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, set2Open] = React.useState(false);

  const handleClick = (state, setState) => {
    setState(!state);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{ pl: 0 }} onClick={()=>handleClick(open, setOpen)}>
        <ListItemIcon>
          <WarningIcon sx={{
            color : 'yellow'
          }} />
        </ListItemIcon>
        <ListItemText sx={{ml : '-15px'}} primary="Предупреждения" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem sx={{
                backgroundColor: '#fafafa',
                height : '30px',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
                <ListItemText primary="№7 Подшипник"/>
                <ThermostatIcon sx={{
                    color : 'yellow'
                }}/>
                <SensorsIcon sx={{
                    color : 'red'
                }}/>
            </ListItem>
        </List>
      </Collapse>
      <ListItemButton sx={{ pl: 0 }} onClick={()=>handleClick(open2, set2Open)}>
        <ListItemIcon>
          <EngineeringIcon/>
        </ListItemIcon>
        <ListItemText sx={{ml : '-15px'}} primary="Все подшипники" />
        {open2 ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div">
        <ListItem sx={{
                backgroundColor: '#fafafa',
                height : '30px',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
            <ListItemText primary="№7 Подшипник"/>
            <ThermostatIcon/>
            <SensorsIcon/>
        </ListItem>
        <ListItem sx={{
                backgroundColor: '#fafafa',
                height : '30px',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
            <ListItemText primary="Уровень масла"/>
            <OpacityIcon/>
        </ListItem>
        </List>
      </Collapse>
    </List>
  );
}