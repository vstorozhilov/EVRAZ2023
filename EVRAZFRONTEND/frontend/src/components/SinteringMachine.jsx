import { display } from "@mui/system";
import RecipeReviewCard from "./Exhauster";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SinteringMachine(props) {
    const matches = useMediaQuery('(min-width:1660px)');
    return (
        <div style={{
            display : 'flex',
            flexDirection: 'column',
            width : matches ? '28%' : '570px'
        }}>
            <div style={{
                height : '40px',
                borderRadius : '5px',
                backgroundColor : '#F4F4F4',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px'
            }}>
                <div>Агломашина №1</div>
            </div>
            <div style={{
                    display : 'flex',
                    marginTop : '10px'
                }}>
                    <RecipeReviewCard exhauster={props.exhausters[0]}/>
                    <RecipeReviewCard exhauster={props.exhausters[1]}/>
            </div>
        </div>
        )
}