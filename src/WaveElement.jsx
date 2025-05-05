import Wave from 'react-wavify'

function WaveElement(){
    return(
        <>
        <div className="wave-wrapper">
        <Wave fill='#004a66'
            paused={false}
            style={{ display: 'flex' }}
            options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3
            }}
            />
        </div>
    </> 
    )
}

export default WaveElement