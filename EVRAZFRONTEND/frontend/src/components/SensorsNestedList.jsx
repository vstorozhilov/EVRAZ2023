import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ListItemSensor from './ListItemSensor';
import ListItemButtonTop from './ListItemButtonTop';
import ListItemButtonNested from './ListItemButtonNested';

export default function SensorsNestedList(props) {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        <ListItemButtonTop
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        topic="Подшипники"
        top_credentials={
            [
                {
                    top_text : '1 ПС',
                    credentials : [
                        ['Т, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[0]][0] : 0, window.signalsOfSelectedExhauster[0], props.setSelectedSignals, 0, true],
                        ['Верт, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[15]][0] : 0, window.signalsOfSelectedExhauster[15], props.setSelectedSignals, 15, true],
                        ['Гориз, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[10]][0] : 0, window.signalsOfSelectedExhauster[10], props.setSelectedSignals, 10, true],
                        ['Ось мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[5]][0] : 0, window.signalsOfSelectedExhauster[5], props.setSelectedSignals, 5, true]
                    ]
                },
                {
                    top_text : '2 ПС',
                    credentials : [
                        ['Т, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[20]][0] : 0, window.signalsOfSelectedExhauster[20], props.setSelectedSignals, 20, true],
                        ['Верт, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[35]][0] : 0, window.signalsOfSelectedExhauster[35], props.setSelectedSignals, 35, true],
                        ['Гориз, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[30]][0] : 0, window.signalsOfSelectedExhauster[30], props.setSelectedSignals, 30, true],
                        ['Ось мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[25]][0] : 0, window.signalsOfSelectedExhauster[25], props.setSelectedSignals, 25, true]
                    ]
                },
                {
                    top_text : '7 ПС',
                    credentials : [
                        ['Т, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[60]][0] : 0, window.signalsOfSelectedExhauster[60], props.setSelectedSignals, 60, true],
                        ['Верт, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[75]][0] : 0, window.signalsOfSelectedExhauster[75], props.setSelectedSignals, 75, true],
                        ['Гориз, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[70]][0] : 0, window.signalsOfSelectedExhauster[70], props.setSelectedSignals, 70, true],
                        ['Ось мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[65]][0] : 0, window.signalsOfSelectedExhauster[65], props.setSelectedSignals, 65, true]
                    ]
                },
                {
                    top_text : '8 ПС',
                    credentials : [
                        ['Т, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[80]][0] : 0, window.signalsOfSelectedExhauster[80], props.setSelectedSignals, 80, true],
                        ['Верт, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[95]][0] : 0, window.signalsOfSelectedExhauster[95], props.setSelectedSignals, 95, true],
                        ['Гориз, мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[90]][0] : 0, window.signalsOfSelectedExhauster[90], props.setSelectedSignals, 90, true],
                        ['Ось мм/c', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[85]][0] : 0, window.signalsOfSelectedExhauster[85], props.setSelectedSignals, 85, true]
                    ]
                },
            ]
        }
        />
        <ListItemButtonNested
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        top_text="Редуктор"
        credentials={
            [
                ['Т на 3 ПС, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[40]][0] : 0, window.signalsOfSelectedExhauster[40], props.setSelectedSignals, 40, false],
                ['Т на 4 ПС, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[45]][0] : 0, window.signalsOfSelectedExhauster[45], props.setSelectedSignals, 45, false],
                ['Т на 5 ПС, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[50]][0] : 0, window.signalsOfSelectedExhauster[50], props.setSelectedSignals, 50, false],
                ['Т на 6 ПС, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[55]][0] : 0, window.signalsOfSelectedExhauster[55], props.setSelectedSignals, 55, false]
            ]
        }
        />
        <ListItemButtonNested
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        top_text="Маслобак"
        credentials={
            [
                ['Уровень масла, %', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[118]][0] : 0, window.signalsOfSelectedExhauster[118], props.setSelectedSignals, 118, false],
                ['Давление масла, кг/см2', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[119]][0] : 0, window.signalsOfSelectedExhauster[119], props.setSelectedSignals, 119, false],
            ]
        }
        />
        <ListItemButtonNested
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        top_text="Газовый коллектор"
        credentials={
            [
                ['Т газа, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[109]][0] : 0, window.signalsOfSelectedExhauster[109], props.setSelectedSignals, 109, false],
                ['Разряжение, мм.в.ст', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[110]][0] : 0, window.signalsOfSelectedExhauster[110], props.setSelectedSignals, 110, false],
            ]
        }
        />
        <ListItemButtonNested
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        top_text="Главный привод"
        credentials={
            [
                ['Ток, А', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[114]][0] : 0, window.signalsOfSelectedExhauster[114], props.setSelectedSignals, 114, false],
                ['Ток двигателя, А', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[115]][0] : 0, window.signalsOfSelectedExhauster[115], props.setSelectedSignals, 115, false],
                ['Напряжение ротора, кВт', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[116]][0] : 0, window.signalsOfSelectedExhauster[116], props.setSelectedSignals, 116, false],
                ['Напряжение статора, кВт', 300, Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[117]][0] : 0, window.signalsOfSelectedExhauster[117], props.setSelectedSignals, 117, false],
            ]
        }
        />
        <ListItemButtonNested
        signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
        lastMessage={props.lastMessage}
        top_text="Охладитель"
        credentials={
            [
                ['Т Воды до, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[108]][0] : 0, window.signalsOfSelectedExhauster[108], props.setSelectedSignals, 108, false],
                ['Т Воды после, С', Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[107]][0] : 0, window.signalsOfSelectedExhauster[107], props.setSelectedSignals, 107, false],
                ['Т Масла до, С', 300, Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[106]][0] : 0, window.signalsOfSelectedExhauster[106], props.setSelectedSignals, 106, false],
                ['Т Масла после, С', 300, Object.keys(props.lastMessage).length > 0 ? props.lastMessage[window.signalsOfSelectedExhauster[105]][0] : 0, window.signalsOfSelectedExhauster[105], props.setSelectedSignals, 105, false],
            ]
        }
        />

    </List>
  );
}