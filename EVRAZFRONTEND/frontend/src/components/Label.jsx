export default function Label(props) {
    return <div style={{
        paddingTop:'2px',
        textAlign: 'center',
        backgroundColor: '#414F4F',
        width: 'max-content',
        height: '20px',
        top: props.top,
        left : props.left,
        position: 'absolute',
        color: 'white',
        borderRadius: '5px'
    }}>
        {props.value.toFixed(2)}
    </div>
}