export default function ScaleField(props) {
    return (
        <div style={{
            height : 30,
            width: 400,
            position: 'absolute',
            top: props.top,
            left: props.left,
            width: props.width,
            backgroundColor: 'yellow'
        }}>
            {props.text} {props.value} {props.unit}
        </div>
    )
}