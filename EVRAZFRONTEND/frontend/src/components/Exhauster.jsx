import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Exh from './Exhauster.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NestedList from './NestedList';
import { useNavigate } from 'react-router-dom';
import {signalsPerExhauster} from './signalMap.js';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345,
                width : '50%',
                border: 'solid #e5e5e5 1px' }}>
      <CardHeader
        sx={{
            backgroundColor : '#6E6E6D',
            color : 'white'
        }}
        avatar={
          <div style={{
            backgroundColor : 'red',
            borderRadius : '50%',
            width : '10px',
            height : '10px'
          }}>

          </div>
        }
        action={
          <IconButton onClick={() => {
            window.signalsOfSelectedExhauster = signalsPerExhauster[parseInt(props.exhauster)];
            navigate("/mnemoschema");
          }
          } sx={{
            borderRadius: '5px',
            backgroundColor: 'white',
            height: '30px',
            width: '30px',
            marginRight: '10px',
            marginLeft: '10px',
            ':hover': {
                backgroundColor: 'white',
                boxShadow: 'none'
            }
        }}>
            <ArrowForwardIosIcon sx={{
                color : '#b1b1b2'
            }}/>
          </IconButton>
        }
        title={<div style={{
        }}>Эксгаустер У-171</div>}
      />
      <CardHeader
        sx={{
            backgroundColor : 'white'
        }}
        avatar={
          <div style={{
            //marginLeft: '-10px',
            marginTop: '-15px',
            height : '20px'
          }}>
            Ротор<br></br>№35к
          </div>
        }
        action={
            <div style={{
                display: 'flex',
                alignItems:'center',
                borderRadius: '3px',
                width: 'min-content',
                height: '30px',
            }}><a href=''>Изменить</a></div>
        }
        title={
            <div style={{
                display: 'flex',
                alignItems:'center',
                borderRadius: '3px',
                width: 'min-content',
                height: '30px',
                backgroundColor: '#f4f4f4'
            }}>10.10.2020</div>
        }
      />
      <CardHeader
        sx={{
            backgroundColor : 'white',
            height : '80px'
        }}
        avatar={
          <div style={{
            //marginLeft: '-10px',
            marginTop: '-25px',
            height : '30px'
          }}>
            Последняя<br></br>замена<br></br>ротора
          </div>
        }
        action={
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                borderRadius: '3px',
                width: 'min-content',
                height: '30px',
            }}><div>Погноз</div><div>5 сут</div></div>
        }
        title={
            <div style={{
                display: 'flex',
                alignItems:'center',
                borderRadius: '3px',
                width: 'max-content',
                height: '30px',
                backgroundColor: '#f4f4f4'
            }}>6 сут</div>
        }
      />
      <CardMedia
        component="img"
        height="100"
        image={Exh}
        alt="Paella dish"
      />
        <CardContent>
            <NestedList/>
        </CardContent>
    </Card>
  );
}