import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { IconButton } from '@mui/material';
import SinteringMachine from './SinteringMachine';
import { Link } from 'react-router-dom';

export default function Main() {
    return <main style={{
        height: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
      }}>
        <div style={{
            height: '100%',
            borderRadius: '10px',
            padding: '20px',
        }}>
            <div style={{
                height: '100%',
                borderRadius: '10px',
                display : 'flex',
                gap: '5px',
                flexDirection : 'column'
            }}>
                <div style={{
                    height: '40px',
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
                    <div>Главный экран</div>
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    flexGrow : 1,
                    frexWarp: 'no-warp',
                    borderRadius : '5px',
                    backgroundColor: 'white'
                }}>
                    <SinteringMachine exhausters={[0, 1]}/>
                    <SinteringMachine exhausters={[2, 3]}/>
                    <SinteringMachine exhausters={[4, 5]}/>
                </div>
            </div>
        </div>
      </main>
}