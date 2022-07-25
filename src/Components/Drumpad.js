import React, { useEffect, useState } from 'react'
import '../App.css'

const Drumpad = (props) => {
    const [isActive, setIsActive] = useState(false)

    const getEffect = () => {
        setIsActive(true);

        setInterval(() => {
            setIsActive(false);
        }, 200)

    }
    
    const playAudio = (audioKeyCode) => {
        const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
        props.handleData(audioKeyCode)
    }

    const getKey = (e) => {
        const eventString = e.keyCode.toString(10)
        if (props.dataKey === eventString) {
            playAudio(props.dataKey)
            getEffect();
        }
    }   

    useEffect(() => {
        document.addEventListener('keydown', getKey);
        return () => {
            document.removeEventListener('keydown', getKey)
            
    }
    }, [])

  return (
    <>
    <div className='drumpad'>
        <button onClick={() => playAudio(props.dataKey)} className={isActive ? 'active' : null}>{props.name}</button>
    </div>

    <section id="audio">
        <audio data-key="81" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        <audio data-key="87" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        <audio data-key="69" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        <audio data-key="65" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        <audio data-key="83" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        <audio data-key="68" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        <audio data-key="90" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        <audio data-key="88" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        <audio data-key="67" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
    </section>
    </>
  )
}

export default Drumpad