import { useState,useEffect, useRef } from "react"

const Stopwatch = () => {
  const [isRunning,setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef(null)
  const startTimeref = useRef(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeref.current)
      }, 10);
      return () => {
        clearInterval(intervalIdRef.current)
      }
    }
  },[isRunning])

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeref.current = Date.now() - elapsedTime;
    }
  };const stop = () => {
    setIsRunning(false)
  }
  const reset = () => {
    setElapsedTime(0)
    setIsRunning(false)
  }
  const formatTime = () => {
    // let hrs = Math.floor(elapsedTime / (1000 * 60 * 60))
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60)
    let secs = Math.floor(elapsedTime / (1000) % 60)
    let miliSecs = Math.floor((elapsedTime % 1000) / 10)

    mins = String(mins).padStart(2,"0")
    secs = String(secs).padStart(2,"0")
    miliSecs = String(miliSecs).padStart(2,"0")
    return `${mins}:${secs}:${miliSecs}`
  }

  return (
    <div className="stopwatch">
    <div className="display">{formatTime()}</div>
    <div className="controls">
    <button onClick={start} className="startBtn">START</button>
    <button onClick={stop} className="stopBtn">STOP</button>
    <button onClick={reset} className="resetBtn">RESET</button>
    </div>

    </div>
  )
}

export default Stopwatch
