import React, { useState, useEffect } from 'react'
import '../App.css'
import Drumpad from './Drumpad'

const DrumContainer = () => {
    const keys = ['81', '87', '69', '65', '83', '68', '90', '88', '67']
    const data = ['Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', "Kick n' Hat", 'Kick', 'Closed HH']
    const [display, setDisplay] = useState('')

    const handleData = (key) => {
        for (let i = 0; i < keys.length; i++){
            if (key === keys[i]){
                setDisplay(data[i])
            }
        }
    }

    useEffect(() => {
        setDisplay("Play a Song!")
    }, [])

  return (
    <div className='container'>
        <div id='drum-machine'>
            <div id="drum-keys">
                <Drumpad name="Q" dataKey="81" handleData = {handleData}/>
                <Drumpad name="W" dataKey="87" handleData = {handleData}/>
                <Drumpad name="E" dataKey="69" handleData = {handleData}/>
                <Drumpad name="A" dataKey="65" handleData = {handleData}/>
                <Drumpad name="S" dataKey="83" handleData = {handleData}/>
                <Drumpad name="D" dataKey="68" handleData = {handleData}/>
                <Drumpad name="Z" dataKey="90" handleData = {handleData}/>
                <Drumpad name="X" dataKey="88" handleData = {handleData}/>
                <Drumpad name="C" dataKey="67" handleData = {handleData}/>
            </div>
        </div>
        <div id="display">
            <p>{display}</p>
        </div>
    </div>
  )
}

export default DrumContainer