
import './App.scss';
import React, { useEffect, useState } from 'react';

function App() {
  const[milliseconds, setMilliseconds] = useState('00')
  const[seconds, setSeconds] = useState('00')
  const[minuts, setMinuts] = useState('00')
  const[hours, setHours] = useState('00')
  const[results, setResults] = useState('')
  const[start, setStart] = useState(false)

  const reset = () => {
    setStart(false)
    setMilliseconds('00')
    setSeconds('00')
    setMinuts('00')
    setHours('00')
    setResults('')
  }
  const result = () => {
    let res = {
      h : hours,
      min : minuts,
      sec : seconds,
      mlsec : milliseconds

    }
    setResults([...results, res])
    

  }

useEffect(()=>{

    const interval = setInterval(() => {

      start && 
      setMilliseconds((parseInt(milliseconds) + 1).toString().padStart(2, '0'))

      if(milliseconds >= 99){
        setMilliseconds('00')
        setSeconds((parseInt(seconds) + 1).toString().padStart(2, '0'))

      }
      if(seconds > 59){
        setSeconds('00')
        setMinuts((parseInt(minuts) + 1).toString().padStart(2, '0'))

      }
      if(minuts > 59){
        setMinuts('00')
        setHours((parseInt(hours) + 1).toString().padStart(2, '0'))

      }
      if(hours > 99){
        setStart(false)
      }
                       
  },10 )
  return ()=>{
    clearInterval(interval)}
}, [milliseconds, start])                 




  return (
    <div className="App">
      <div className="wrapper">
        <span className='title'>Stopwatch</span>
        <div className="time">
          <div className="time__hours">
            <span className='time__hours__title'>hours</span>
            <div className='time__hours__block'>
              <span className='hours__value'>{hours}</span>
            </div>
          </div>
          <div className="time__minuts">
            <span className='time__minuts__title'>minuts</span>
            <div className='time__minuts__block'>
              <span className='minuts__value'>{minuts}</span>
            </div>
          </div>
          <div className="time__seconds">
            <span className='time__seconds__title'>seconds</span>
            <div className='time__seconds__block'>
              <span className='seconds__value'>{seconds}</span>
            </div>
          </div>
          <div className="time__milliseconds">
            <span className='time__milliseconds__title'>milliseconds</span>
            <div className='time__milliseconds__block'>
              <span className='milliseconds__value'>{milliseconds}</span>
            </div>
          </div>
        </div>

      </div>
      <div className="nav">
        {
          start ? 
          <button 
          onClick={()=> setStart(false)}
          className='btn stop'>Stop</button>
          : 
          <button 
          onClick={()=> setStart(true)}
          className='btn start'>Start</button>
        }
        
        
        <button 
          onClick={reset}
          className='btn reset'>Reset</button>
        <button
          onClick={result} 
          className='btn new'>New</button>
      </div>
      <div className="results">
        { results !== '' &&
          results.map((res, index)=> {
            return(
              <span key={index}>{index + 1}. {res.h}h {res.min}min {res.sec}sec {res.mlsec}ms</span>
            )
          })
        }
          
          </div>

    </div>
  );
}

export default App;
