import React from 'react'
import { useEffect, useState } from 'react'

function DigitalClock() {
  const [time, setTime]= useState(new Date())

  useEffect(
    ()=>{
    const IntervalId = setInterval( ()=>{
        setTime(new Date())
    },1000);
    return ()=>{
        clearInterval(IntervalId)
    }
    },
    
    []
  )

  function formatTime(){
    let hours = time.getHours();
    let  minutes = time.getMinutes();
    let  seconds = time.getSeconds();
    const meridians = hours>=12 ? "PM":"AM";

    hours= hours % 12 || 12 ;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridians)} `
  }

  function padZero(num){
    return( num<10?"0":"") + num
  }
  return (
    <div  className="clock-container">  
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock
