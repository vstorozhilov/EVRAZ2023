import { IconButton } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SimpleChart from './SimpleChart';
import SensorsNestedList from './SensorsNestedList';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


var historicalData = {};


function CircularIndeterminate(props) {
    return (
      <div style={{
        display: 'flex',
        position : 'relative',
        left : props.left
        }}>
        <CircularProgress />
      </div>
    );
  }

export default function Charts() {

    const [lastMessage, setLastMessage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [delay, setDelay] = useState(0);

    const [selectedSignals, setSelectedSignals] = useState(
        window.signalsOfSelectedExhauster.reduce((accumulator, value) => {
            return {...accumulator, [value]: true};
          }, {})
    );

    const getNextMessage = async (n) => {
        if (n != 1) setIsLoading(true);
        let respSensors = window.signalsOfSelectedExhauster.reduce((a, b)=>{
            return a + ',' + b;
        });
        let response = await fetch(`http://localhost:1000/api/values?keys=${respSensors}&n=${n}`, {
            mode : 'cors'
        });
        let resp_json = await response.json();
        let diff = (new Date() - new Date(resp_json.moment[resp_json.moment.length - 1] * 1000)) / 1000;
        setDelay(diff);
        resp_json.moment = resp_json.moment.map(item=>(
            new Date(item * 1000).toLocaleString()
        ));
        if (n === 1) {
            if (resp_json.moment[0] !== historicalData['moment'][historicalData['moment'].length - 1]){
                Object.keys(resp_json).forEach((item)=>{
                    historicalData[item] = historicalData[item].slice(1,);
                    historicalData[item].push(resp_json[item][0]);
                })
                setLastMessage(resp_json);
            }
        }
        else {
            historicalData = resp_json;
            setLastMessage(prev=>{
                let next = {};
                Object.keys(resp_json).forEach((item)=>{
                    next[item] = [historicalData[item][historicalData[item].length - 1]]
                })
                return next;
            })
        }
        if (n != 0) setIsLoading(false);
    }

    useEffect(()=>{
        getNextMessage(59);
        setTimeout(()=>{
            setInterval(()=>getNextMessage(1), 10000)
        }, 20000);
    }, [])

    console.log(lastMessage);

    return <main style={{
        height: '855px',
        width: '1540px',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
      }}>
        <div style={{
            height: '100%',
            borderRadius: '10px',
            padding: '20px',
            width: '100%'
        }}>
            <div style={{
                height: '100%',
                borderRadius: '10px',
                display : 'flex',
                gap: '5px',
                flexDirection : 'column',
                width: '100%'
            }}>
                <div style={{
                    minHeight: '40px',
                    borderRadius : '5px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton sx={{
                        borderRadius: '5px',
                        backgroundColor: '#FAB82E',
                        height: '30px',
                        width: '30px',
                        marginRight: '20px',
                        marginLeft: '15px',
                        ':hover': {
                            backgroundColor: '#FAB82E',
                            boxShadow: 'none'
                        }
                    }}>
                        <TextSnippetIcon sx={{
                            color : 'white'
                        }}/>
                    </IconButton>
                    <div>Эксгаустер X-172</div>
                    {isLoading ? <><CircularIndeterminate left={500}/>
                    <CircularIndeterminate left={700}/>
                    <CircularIndeterminate left={900}/></> : null}
                    <div style={{
                        display : 'flex',
                        alignItems: 'center',
                        position : 'relative',
                        left : '50px',
                        backgroundColor: 'yellow',
                        height : '100%',
                        borderRadius: '5px',
                        marginTop: '5px',
                        marginBottom: '5px'
                    }}>Значение задержки: {delay} c.</div>
                </div>
                <div style={{
                    display : 'flex',
                }}>
                    <div style={{
                        minWidth : '360px',
                        height : '100px'
                    }}>
                        <SensorsNestedList
                        selectedSignals={selectedSignals}
                        setSelectedSignals={setSelectedSignals}
                        lastMessage={lastMessage}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWarp: 'no-warp',
                        borderRadius : '5px',
                        width: '100%',
                        gap: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                '1ПС' : window.signalsOfSelectedExhauster[0],
                                '2ПС' : window.signalsOfSelectedExhauster[20],
                                '3ПС' : window.signalsOfSelectedExhauster[40],
                                '4ПС' : window.signalsOfSelectedExhauster[45],
                                '5ПС' : window.signalsOfSelectedExhauster[50],
                                '6ПС': window.signalsOfSelectedExhauster[55],
                                '7ПС' : window.signalsOfSelectedExhauster[60],
                                '8ПС' : window.signalsOfSelectedExhauster[80],
                                '9ПС' : window.signalsOfSelectedExhauster[100],
                                'Масло до' : window.signalsOfSelectedExhauster[105],
                                'Масло после' : window.signalsOfSelectedExhauster[106],
                                'Вода до' : window.signalsOfSelectedExhauster[107],
                                'Вода после' : window.signalsOfSelectedExhauster[108],
                                'Газовый коллектор' : window.signalsOfSelectedExhauster[109],
                            }}
                            historicalData={historicalData}
                            title='Температура'/>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                '1ПС Осевая' : window.signalsOfSelectedExhauster[5],
                                '1ПС Горизонтальная' : window.signalsOfSelectedExhauster[10],
                                '1ПС Вертикальная' : window.signalsOfSelectedExhauster[15],
                                '2ПС Осевая' : window.signalsOfSelectedExhauster[25],
                                '2ПС Горизонтальная' : window.signalsOfSelectedExhauster[30],
                                '2ПС Вертикальная': window.signalsOfSelectedExhauster[35],
                                '7ПС Осевая' : window.signalsOfSelectedExhauster[65],
                                '7ПС Горизонтальная' : window.signalsOfSelectedExhauster[70],
                                '7ПС Вертикальная' : window.signalsOfSelectedExhauster[75],
                                '8ПС Осевая' : window.signalsOfSelectedExhauster[85],
                                '8ПС Горизонтальная' : window.signalsOfSelectedExhauster[90],
                                '8ПС Вертикальная' : window.signalsOfSelectedExhauster[95],
                            }}
                            historicalData={historicalData}
                            title='Вибрация'/>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                'Ток ротора' : window.signalsOfSelectedExhauster[114],
                                'Ток статора' : window.signalsOfSelectedExhauster[116],
                            }}
                            historicalData={historicalData}
                            title='Ток привода'/>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                'Напряжение ротора' : window.signalsOfSelectedExhauster[115],
                                'Напряжение статора' : window.signalsOfSelectedExhauster[117],
                            }}
                            historicalData={historicalData}
                            title='Напряжение привода'/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWarp: 'no-warp',
                        borderRadius : '5px',
                        width: '100%',
                        gap: 10
                    }}>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                'Давление масла' : window.signalsOfSelectedExhauster[119],
                            }}
                            historicalData={historicalData}
                            title='Давление'/>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                'Разряжение газового коллектора' : window.signalsOfSelectedExhauster[110],
                            }}
                            historicalData={historicalData}
                            title='Разряжение'/>
                        <SimpleChart
                        selectedSignals={selectedSignals}
                        signals={
                            {
                                'Уровень масла' : window.signalsOfSelectedExhauster[118],
                            }}
                            historicalData={historicalData}
                            title='Уровень масла'/>
                    </div>
                </div>
            </div>
        </div>
      </main>
}