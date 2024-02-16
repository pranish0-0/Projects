import React, { useState } from 'react'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Calculator = () => {
    const [result, setResult] = useState('');
    const [calc, setCalc] = useState('');
    const ops = ['+', '-', '*', '/', '.',];

    const handleClick = value => {
        if (
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }
        setCalc(calc + value);
        if(!ops.includes(value)) {
            setResult(eval(calc + value).toString()); 
        }
    }

    const clear = () => {
        setCalc('');
        setResult('');
    }
    const backSpace = () => {
        if (calc === 'Invalid Syntax') {
            clear();
        }
        else if (calc === '') {
            return;
        }
        else{
            const value = calc.slice(0, -1);
            setCalc(value);
            setResult('');
        }
    }

    const equalsTo = value => {
        if (!ops.includes(value)) {
            setCalc('Invalid Syntax');
            setResult('')
        }
        setCalc(eval(calc).toString());
        setResult('');
    }

    const percent = value => {
        if (calc === '') {
            return;
        }
        else{
            setCalc(calc + value);
            if(!ops.includes(value)) {
                setResult(eval(calc + value).toString()); 
            }
        }
    }

  return (

    <>
    <div className="main h-[75vh] w-full flex flex-col justify-center items-center">

        <div className="backbtn w-[110px] float-left flex absolute cursor-pointer m-1 rounded bg-[#262834] text-[#ffffff] font-medium left-4 top-28">
            <Link to='/projects'>
                <button className='w-full inline-flex justify-around'>
                    <MdOutlineKeyboardBackspace size={30}/>Go Back
                </button>
            </Link>
        </div>

        <h1 className='text-green-400 text-[40px] -mt-6 m-8'>Calculator</h1>

        <div className="container w-[306px] h-[370px] border-[#101116]-[10px] rounded bg-[#101116]">

            <div className="display p-4 text-right text-white text-2xl font-medium">
                {result ? <span className='text-gray-400 text-sm'>{result}</span> : "" }&nbsp; {calc || 0}
            </div>

            <div className="keypad grid">

                <button onClick={clear} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium '>
                    Clear
                </button>
                <button onClick={backSpace} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    C
                </button>
                <button onClick={() => percent('/100')} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    %
                </button>

                <button onClick={() => handleClick('/')} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    &divide;
                </button>
                
                <button onClick={() => handleClick('7')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    7
                </button>
                <button onClick={() => handleClick('8')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    8
                </button>
                <button onClick={() => handleClick('9')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    9
                </button>

                <button onClick={() => handleClick('*')} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    &times;
                </button>

                <button onClick={() => handleClick('4')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    4
                </button>
                <button onClick={() => handleClick('5')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    5
                </button>
                <button onClick={() => handleClick('6')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    6
                </button>

                <button onClick={() => handleClick('-')} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    &ndash;
                </button>

                <button onClick={() => handleClick('1')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    1
                </button>
                <button onClick={() => handleClick('2')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    2
                </button>
                <button onClick={() => handleClick('3')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    3
                </button>

                <button onClick={() => handleClick('+')} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium'>
                    +
                </button>

                <button onClick={() => handleClick('0')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    0
                </button>
                <button onClick={() => handleClick('.')} className='m-1 rounded cursor-pointer bg-[#262834] text-[#ffffff] font-medium'>
                    .
                </button>

                <button onClick={equalsTo} className='m-1 rounded cursor-pointer bg-[#56cbdb] text-[#ffffff] font-medium col-[3/5]'>
                    =
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculator