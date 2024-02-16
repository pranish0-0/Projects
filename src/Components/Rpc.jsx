import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Rpc = () => {
    const[userChoice, setUserChoice ] = useState("rock");
    const[compChoice, setCompChoice ] = useState("rock");

    const[userDispChoice, setDispUserChoice ] = useState("rock");
    const[compDispChoice, setDispCompChoice ] = useState("rock");
    
    const[userPoints, setUserPoints] = useState(0)
    const[compPoints, setCompPoints] = useState(0)

    const[turnResults, setTurnResults] = useState(null)
    const[result, setResult] = useState("Let\'s see who wins")

    const[gameOver, setGameOver] = useState(false)

    const choices = ['rock', 'paper', 'scissors']

    const handleClick = (value) => {
      if (gameOver) {
        alert("Game Over! Restart To Play Again!")
      }
      else{
        setDispUserChoice('rock')
        setDispCompChoice('rock')
        document.getElementById('user').style.transform = "rotateY(180deg) rotateZ(30deg)"
        document.getElementById('comp').style.transform = "rotateZ(30deg)"
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setTimeout(() => {
          document.getElementById('user').style.transform = "rotateY(180deg)"
          document.getElementById('comp').style.transform = ""
          setUserChoice(value);
          setDispUserChoice(value)
          setCompChoice(randomChoice)
          setDispCompChoice(randomChoice)
        }, 800);
      }
    }

    const reset = () => {
      window.location.reload()
  }

    useEffect(() => {
      const comboMoves = userChoice + compChoice

      if(userPoints <= 4 && compPoints <=4 ) {
        
        if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
          const updatedUserPoints = userPoints + 1;
          setUserPoints(updatedUserPoints);
          setTurnResults("User got the point")
          if (updatedUserPoints === 5) {
            setGameOver(true)
            setResult("User Wins !")
          }
        }
        
        if (comboMoves === 'scissorsrock' || comboMoves === 'rockpaper' || comboMoves === 'paperscissors') {
          const updatedCompPoints = compPoints + 1;
          setCompPoints(updatedCompPoints);
          setTurnResults("Computer got the point")
          if (updatedCompPoints === 5) {
            setGameOver(true)
            setResult("Computer Wins !")
          }
        }

        if (comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors') {
          setTurnResults("No one got the point.")
        }
      }
    }, [userChoice, compChoice])

  return (
    <>
    <div className="main h-[75vh] w-full flex flex-col items-center justify-start">

        <div className="backbtn w-[110px] cursor-pointer rounded bg-[#262834] text-[#ffffff] font-medium absolute p-1 left-5">
            <Link to='/projects'>
                <button className='w-full inline-flex justify-around'>
                    <MdOutlineKeyboardBackspace size={30}/>Go Back
                </button>
            </Link>
        </div>

        <h1 className='text-green-400 text-4xl mt-16'>Rock Paper Scissors</h1>

        
      <div className="text-white text-center font-sans p-2">

          <div className='score h-[20vh] flex justify-around items-center'>
              <h1 className='text-3xl'>User Points: {userPoints}</h1>
              <h1 className='text-3xl'>Computer Points: {compPoints} </h1>
          </div>

          <div className='choice h-[25vh] flex justify-center'>
              <div className='choice-user'>
                  <img src={`https://github.com/pranish0-0/projects/blob/main/public/images/${userDispChoice}.png?raw=true`} alt='userhand' id='user' className='user-hand h-64 w-80 transition duration-150 ease-in'/>
                  <p className='-mt-6'>{userChoice}</p>
              </div>
              <div className='choice-comp'>
                  <img src={`https://github.com/pranish0-0/projects/blob/main/public/images/${compDispChoice}.png?raw=true'`} alt="comphand" id='comp' className='comp-hand h-64 w-80 transition duration-150 ease-in' />
                  <p className='-mt-6'>{compChoice}</p>
              </div>
          </div>

          <div className='button-div mt-24'>
              <button onClick={() => handleClick('rock')} className='button w-36 h-12 text-xl items-center bg-[rgba(255,127,80)] border rounded-md m-2'>Rock </button>
              <button onClick={() => handleClick('paper')} className='button w-36 h-12 text-xl items-center bg-[rgba(255,127,80)] border rounded-md m-2'>Paper</button>
              <button onClick={() => handleClick('scissors')} className='button w-36 h-12 text-xl items-center bg-[rgba(255,127,80)] border rounded-md m-2'>Scissors</button>
          </div>

          <div className='result mt-10'>
              <h1 className='max-md:text-[25px] text-3xl'>Turn Result: {turnResults} </h1>
              <h1 className='max-md:text-[26px] text-3xl'>Final Result: {result} </h1>
          </div>

          <div className='button-div flex justify-center p-5'>
              {gameOver ? <button className='button w-36 h-12 text-xl items-center justify-around bg-[rgba(255,127,80)] border rounded-md m-2' onClick={() => reset()}>Restart Game ?</button> : <button></button>}
          </div>

      </div> 
    </div>
    </>
  )
}

export default Rpc
