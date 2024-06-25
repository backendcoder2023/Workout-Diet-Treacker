import { useState, useRef } from "react";
import Bwork from "./Bwork";
import styles from './Tracker.module.css'

function StopWatch() {
  const startTime = useRef(0);
  const intervalId = useRef(null);
    
  const [elapsedTime, setElapsedTime] = useState(0);
 

  
 const handleStart = () => {
  startTime.current = Date.now()
  intervalId.current = setInterval (() => {
      setElapsedTime(Date.now() -  startTime.current);
  }, 10)

 }

 const handleStop = () => {
  clearInterval(intervalId.current);
 }


const handleReset = () => {
  setElapsedTime(0);
    
  };

  const formatTime = () => {
   let  mint = Math.floor (elapsedTime / (1000 * 60 ) % 60);
  let  second = Math.floor(elapsedTime / (1000) % 60);
let  milisecond = Math.floor (elapsedTime % 1000 / 10);

   mint = String(mint).padStart(2, "0");
   second = String(second).padStart(2,"0");
   milisecond = String(milisecond).padStart(2,"0");


     return `${mint}:${second}:${milisecond}`


  }

  return (
    <>

    
      <div>

        <div className={styles.zero}>{formatTime()}</div>

        <div className={styles.watchdiv}>

          <Bwork text="Start" handleClick={handleStart} />
          <Bwork text="Stop" handleClick={handleStop} />
          <Bwork text="Reset" handleClick={handleReset} />
        </div>
      </div>
    </>
  );
}

export default StopWatch;