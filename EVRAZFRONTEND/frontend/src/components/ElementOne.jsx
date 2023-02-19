export default function ElementOne(props) {
    return (
        
        <div style={{
            display : 'flex',
            width : '120px',
            height : '170px',
            backgroundColor: '#414F4F',
            borderRadius: '5px',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: props.top,
            left: props.left
            }}>
                <div style={{
                    textAlign: 'center',
                    marginTop : '3px',
                    width : '100px',
                    height: '20px',
                    border: 'solid #8D9595 1px',
                    color : 'white'
                }}>{props.title}</div>
                <svg width="65" height="35" viewBox="0 0 65 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.19515 15.5262L9.05234 5.96219H22.5821L27.4393 15.5262V20.8035H28.8618V20.1289H29.8896V20.8035H30.5748V22.1527H29.8896V25.5257H31.26V34.2955H28.8618V22.1527H27.4393V28.5059L24.3171 32.9463H7.3173L4.19515 28.5059V22.1527H2.82478V34.2955H0.426636V25.5257H1.79701V22.1527H0.769228V20.8035H1.79701V20.1289H2.82478V20.8035H4.19515V15.5262Z" fill="#444444"/>
                <path d="M37.5285 15.5262L42.3857 5.96219H55.9154L60.7726 15.5262V20.8035H62.1952V20.1289H63.223V20.8035H63.9082V22.1527H63.223V25.5257H64.5933V34.2955H62.1952V22.1527H60.7726V28.5059L57.6505 32.9463H40.6507L37.5285 28.5059V22.1527H36.1582V34.2955H33.76V25.5257H35.1304V22.1527H34.1026V20.8035H35.1304V20.1289H36.1582V20.8035H37.5285V15.5262Z" fill="#444444"/>
                </svg>
                <div style={{
                    marginTop : '10px',
                    display: 'flex',
                    height : '20px',
                    width : '100px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color : 'white'
                }}>
                    <div>T, C</div>
                    <div>{props.values[0][0].toFixed(2)}</div>
                </div>
                <div style={{
                    display: 'flex',
                    height : '27px',
                    width : '100px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color : 'white'
                }}>
                    <div>B, мм/с</div>
                    <div>{props.values[1][0].toFixed(2)}</div>
                </div>
                <div style={{
                    display: 'flex',
                    height : '27px',
                    width : '100px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color : 'white'
                }}>
                    <div>Г, мм/с</div>
                    <div>{props.values[2][0].toFixed(2)}</div>
                </div>
                <div style={{
                    display: 'flex',
                    height : '27px',
                    width : '100px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color : 'white'
                }}>
                    <div>О, мм/с</div>
                    <div>{props.values[3][0].toFixed(2)}</div>
                </div>

        </div>
    )
}