import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardBackspace, MdSpaceBar} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Stopwatch = () => {
    const[isRunning, setIsRunning] = useState(false);    
    const[time, setTime] = useState(0);
    const[laps, setLaps] = useState([]);

    const handleStart = () => {
        setIsRunning(true)
    }
    const handleStop = () => {
        setIsRunning(false)
    }
    const handleReset = () => {
        setTime(0)
        setLaps([])
    }
    const handleLap = () => {
        setLaps((prevLaps) => [...prevLaps, time]);
    }

    const formatTime = (timeInMilliSeconds) => {
        const hours = Math.floor(timeInMilliSeconds / 3600000);
        const minutes = Math.floor((timeInMilliSeconds % 3600000) / 60000);
        const seconds = Math.floor((timeInMilliSeconds % 60000) / 1000);
        const milliseconds = Math.floor((timeInMilliSeconds % 1000) / 10);
    
        return `
            ${hours.toString().padStart(2, '0')}:
            ${minutes.toString().padStart(2, '0')}:
            ${seconds.toString().padStart(2, '0')}:
            ${milliseconds.toString().padStart(2, '0')}
        `;
    };    

    const handleKeyDown = (event) => {
        if (event.key === 's' && !isRunning) {
          handleStart();
        } else if (event.key === 'l') {
          document.getElementById('lap').click();
        } else if (event.key === 'r') {
          handleReset();
        } else if (event.key === ' ') {
          handleStop();
        } 
      };
      

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10)
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

  return (
    <>
    <div>

        <div className="backbtn w-[110px] float-left flex absolute cursor-pointer m-1 rounded bg-[#262834] text-[#ffffff] font-medium left-4 top-28">
            <Link to='/projects'>
                <button className='w-full inline-flex justify-around'>
                    <MdOutlineKeyboardBackspace size={30}/>&nbsp;Go Back
                </button>
            </Link>
        </div>

        <div className='mx-auto m-4 text-white mt-20'>
            <h1 className='font-[DaggerSquare] text-6xl text-green-400 text-center'>Stop Watch</h1>

            <p className='text-base p-4'>Note: <span>This stopwatch does not work while running on background.</span></p>

            <div className='text-center text-white mt-24'>

                <p className='text-7xl font-[ClockIcons] max-md:text-6xl'>{formatTime(time)}</p>

                {isRunning && (
                    <label>
                        <button id='lap' onClick={handleLap} className='border rounded-md bg-[#0090dd] min-w-[90px] h-12 m-6'>
                            <span className='absolute -mt-5 -ml-8 border rounded-lg h-[20px]  w-4 bg-white text-[#0090dd]'>L</span>
                            <span className='text-xl '>Lap</span>
                        </button>
                    </label>
                )}
                {!isRunning && (
                    <label>
                        <button onClick={handleStart} className='text-xl border rounded-md bg-[#4aae71] min-w-[90px] h-12 m-6'>
                        <span className='-ml-2 -mt-5 flex absolute p-2 items-center justify-center border rounded-lg h-[20px]  w-4 bg-white text-[#4aae71]'>S</span>
                        <span>Start</span>
                        </button>
                    </label>
                )}
                {isRunning && (
                    <label>
                        <button onClick={handleStop} className='text-xl border rounded-md bg-[#ef6262] min-w-[90px] h-12 m-6'>
                        <span className='-ml-2 -mt-5 flex absolute  items-center justify-center border rounded-lg  bg-white text-[#ef6262] h-6 w-6'><MdSpaceBar size={30} className='font-medium'/></span>
                        <span>Stop</span>
                        </button>
                    </label>
                )}
                {!isRunning && (
                    <label>
                        <button onClick={handleReset} className='text-xl border rounded-md bg-[#eda004] min-w-[90px] h-12 m-6'>
                        <span className='-ml-2 -mt-5 flex absolute p-2 items-center justify-center border rounded-lg h-[20px]  w-4 bg-white text-[#eda004]'>R</span>
                        <span>Reset</span>
                        </button>
                    </label>
                )}

                {laps.length > 0 && (
                    <table className='mx-auto'>
                        <thead>
                            <tr>
                                <th className='text-xl font-thin font-[DaggerSquare] p-6'>Lap</th>
                                <th className='text-xl font-thin font-[DaggerSquare] p-6'>Lap Time</th>
                                <th className='text-xl font-thin font-[DaggerSquare] p-6'>Total Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {laps.map((lapTime, index) => (
                                <tr key={index}>
                                    <td className='font-[ClockIcons]'>{index + 1}</td>
                                    <td className='font-[ClockIcons]'>{formatTime(lapTime)}</td>
                                    <td className='font-[ClockIcons]'>{formatTime(time)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            

            </div>
        </div>
        
    </div>
    </>
  )
}

export default Stopwatch