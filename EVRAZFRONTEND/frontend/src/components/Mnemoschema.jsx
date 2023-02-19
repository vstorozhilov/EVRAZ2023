import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { IconButton } from '@mui/material';
import SVGMnemoschema from './SVGMnemoschema';
import ElementOne from './ElementOne';
import ElementTwo from './ElementTwo';
import Pipe from './SVGPipe';
import Scale from './Scale';
import Label from './Label';
import ScaleField from './ScaleField';
import Flap from './Flap';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

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

export default function Mnemoschema() {

    const [lastMessage, setLastMessage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [delay, setDelay] = useState(0);

    const [selectedSignals, setSelectedSignals] = useState(
        window.signalsOfSelectedExhauster.reduce((accumulator, value) => {
            return {...accumulator, [value]: true};
          }, {})
    );

    const getNextMessage = async (isFirst) => {
        if (isFirst) setIsLoading(true);
        let respSensors = window.signalsOfSelectedExhauster.reduce((a, b)=>{
            return a + ',' + b;
        });
        let response = await fetch(`http://localhost:1000/api/values?keys=${respSensors}&n=1`, {
            mode : 'cors'
        });
        let resp_json = await response.json();
        console.log(resp_json);
        let diff = (new Date() - new Date(resp_json.moment[resp_json.moment.length - 1] * 1000)) / 1000;
        resp_json.moment = resp_json.moment.map(item=>(
            new Date(item * 1000).toLocaleString()
        ));
        if (resp_json.moment != lastMessage.moment) {
            setDelay(diff);
            setLastMessage(resp_json);
        }
        if (isFirst) setIsLoading(false);
    }

    useEffect(()=>{
        getNextMessage(true);
        setTimeout(()=>{
            setInterval(()=>getNextMessage(false), 20000)
        }, 30000);
    }, [])

    const navigate = useNavigate();

    return <main style={{
        position: 'relative',
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
                        //position : 'relative',
                        //left : '50px',
                        backgroundColor: 'yellow',
                        height : '100%',
                        borderRadius: '5px',
                        marginTop: '5px',
                        marginBottom: '5px',
                        marginLeft: '20px'
                    }}>Значение задержки: {Math.round(delay)} c.</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexGrow : 1,
                    frexWarp: 'no-warp',
                    borderRadius : '5px',
                    backgroundColor: 'white',
                    width: '100%'
                }}>
                    <SVGMnemoschema/>
                    <Pipe/>

                    {/* Температуры охладителя */}
                    <Label top={240 - 55} left={940} 
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[108]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={150 - 55} left={1020}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[107]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={150 - 55} left={1100}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[106]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={320 - 55} left={1060}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[105]][0] : 0}
                    minValue={null}
                    maxValue={null}/>

                    {/* Разряжение */}
                    <Label top={345 - 55} left={345}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[110]][0] : 0}
                    minValue={null}
                    maxValue={null}/>

                    {/* Токи, Напряжения */}
                    <Label top={444 - 55} left={1105} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[114]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={464 - 55} left={1105} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[115]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={484 - 55} left={1105} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[116]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Label top={504 - 55} left={1105} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[117]][0] : 0}
                    minValue={null}
                    maxValue={null}/>

                    <ElementOne title="8ПС" top={590 - 55} left={40}
                    signalsOfSelectedExhauster={window.signalsOfSelectedExhauster}
                    values={[
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[80]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[95]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[90]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[85]][0] : 0]
                    ]}
                    />
                    <ElementOne title="7ПС" top={680 - 55} left={380}
                    values={[
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[60]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[75]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[70]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[65]][0] : 0]
                    ]}
                    />
                    <ElementOne title="1ПС" top={630 - 55} left={1150}
                    values={[
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[0]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[15]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[10]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[5]][0] : 0]
                    ]}/>
                    <ElementOne title="2ПС" top={630 - 55} left={810}
                     values={[
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[20]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[35]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[30]][0] : 0],
                        [Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[25]][0] : 0]
                    ]}/>
                    <ElementTwo title="5ПС" top={645 - 55} left={650}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[50]][0] : 0}/>
                    <ElementTwo title="6ПС" top={645 - 55} left={510}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[55]][0] : 0}/>
                    <ElementTwo title="4ПС" top={330 - 55} left={500}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[45]][0] : 0}/>
                    <ElementTwo title="3ПС" top={330 - 55} left={650}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[40]][0] : 0}/>
                    <ElementTwo title="9ПС" top={480 - 55} left={40}
                    value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[100]][0] : 0}/>
                    <div style={{
                        position: 'absolute',
                        top: 250,
                        left : 230
                    }}>
                        Температура <br></br> газа, C
                    </div>
                    <Label top={260} left={350} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[109]][0] : 0}
                    minValue={null}
                    maxValue={null}/>

                    <div style={{
                        position: 'absolute',
                        top: 190,
                        left : 700
                    }}>
                        Уровень <br></br> масла, %
                    </div>
                    <Label top={200} left={820} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[118]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    
                    <div style={{
                        position: 'absolute',
                        top: 300,
                        left : 1200
                    }}>
                        Давление <br></br> масла, %
                    </div>
                    <Label top={300} left={1320} value={Object.keys(lastMessage).length > 0 ? lastMessage[window.signalsOfSelectedExhauster[119]][0] : 0}
                    minValue={null}
                    maxValue={null}/>
                    <Flap/>
                    <Button variant="outlined" sx={{
                        position: 'absolute',
                        top: '100px',
                        right: '100px',
                        color: 'black',
                        borderColor: '#FAB82E'
                    }}
                   onClick={()=>navigate('/charts')}
                    >График</Button >
                </div>
            </div>
        </div>
      </main>
}