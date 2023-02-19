import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Header() {
  return (
      <header className="App-header" style={{
        backgroundColor : 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>
        <div style={{
          display : 'flex',
          alignItems : 'center',
        }}>
          <IconButton aria-label="menu-icon"
          sx={{
              borderRadius: '5px',
              backgroundColor: '#FAB82E',
              height: '40px',
              width: '40px',
              marginRight: '20px',
              ':hover': {
                backgroundColor: '#FAB82E',
                boxShadow: 'none'
              }
          }}>
            <MenuIcon
            sx={{
              color: 'white'
            }}
            />
          </IconButton>
          <div style={{
            width : '2px',
            height : '40px',
            backgroundColor: '#F4F4F4',
            marginRight: '20px',
          }}></div>
          <div style={{
            display : 'flex',
            flexDirection: 'column',
            gap: '3px',
            marginRight: '5px'
          }}>
            <div style={{
              height : '3px',
              width : '15px',
              backgroundColor: "#FCB53B"
            }}></div>
            <div style={{
              height : '3px',
              width : '15px',
              backgroundColor: "#F57F29"
            }}></div>
            <div style={{
              height : '3px',
              width : '15px',
              backgroundColor: "#E32213"
            }}></div>
          </div>
          <div style={{
            marginRight: '60px'
          }}>
            ЕВРАЗ
          </div>
          <div>
            Прогнозная аналитика эксгаустеров
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Button variant="contained"
          sx={{
            backgroundColor: "#FAB82E",
            color : 'black',
            marginRight: '20px',
            boxShadow: 'none',
            height : '26px',
            ':hover': {
              backgroundColor: '#FAB82E',
              boxShadow: 'none'
            }
          }}>
            Справочник
          </Button>
          <IconButton
            sx={{
              borderRadius: '5px',
              backgroundColor: '#FAFAFA',
              marginRight: '20px',
              height: '26px',
              width: '26px',
              border: 'solid #B1B1B2 1px',
              ':hover': {
                backgroundColor: '#FAFAFA',
                boxShadow: 'none'
              }
          }}>
            <NotificationsNoneIcon fontSize='small'/>
            <div style={{
              width : '5px',
              height : '5px',
              borderRadius : '50%',
              position: 'absolute',
              top: '-1px',
              right: '-1px',
              backgroundColor: 'red'
            }}></div>
          </IconButton>
          <div style={{
            width : '2px',
            height : '40px',
            backgroundColor: '#F4F4F4',
            marginRight: '20px',
          }}></div>
          <div style={{
              width : '40px',
              height : '40px',
              backgroundColor: '#F4F4F4',
              borderRadius: '5px',
              textAlign: 'center',
              paddingTop: '7px'
            }}>DN
          </div>
          <IconButton sx={{
              height: '26px',
              width: '26px',
              ':hover': {
                backgroundColor: '#FAFAFA',
                boxShadow: 'none'
              }
          }}>
            <KeyboardArrowDownIcon sx={{
              color : 'black'
            }}/>
          </IconButton>
        </div>
      </header>
  );
}