import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav) //everytime the funciton is called it set the calue of "nav" to opposite of whatever 
                    //it has   now.. so the default value here is true so on first call it will set to false 
    }

  return (
    <>
    <div className=' flex justify-between items-center h-24 max-w-[1580px] mx-auto px-4 text-white'>
      <h1 className='w-full text-4xl font-bold text-[#00df9a]'> <Link to='/projects'>Learn</Link></h1>
      <ul className='hidden md:flex min-w-[530px]' id='longul' >
        <li className='p-4 text-lg cursor-pointer hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-[#00df9a]'>
          <Link to="/projects">Home</Link> 
          </li>
        <li className='p-4 text-lg cursor-pointer hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-[#00df9a]'>
          <Link to='/calc'>Calculator</Link>
        </li>
        <li className='p-4 text-lg cursor-pointer hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-[#00df9a]'>
          <Link to='/rpc'>R P S</Link>
        </li>
        <li className='p-4 text-lg cursor-pointer hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-[#00df9a]'>
          <Link to='/note'>Note App</Link>
        </li>
        <li className='p-4 text-lg cursor-pointer hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-[#00df9a]'>
          <Link to='/'></Link>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        {/* if nav is not true, then show {close icon}. Else show {menu icon}.. */ }
      </div>

      <div className={!nav ? /*if nav is not true*/
                       'fixed left-0 top-0 w-[42%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden' 
                       /*else*/ :  'fixed left-[-100%] ease-in-out duration-700'}>
                        
        <h1 className='w-full text-4xl font-bold text-[#00df9a] m-4 mt-7'>Learn</h1>
        <ul className='uppercase p-4 '>
          <li className='p-4 border-b border-b-grey-900' onClick={handleNav}>
            <Link to="/projects">Home</Link>
          </li>
          <li className='p-4 border-b border-b-grey-900' onClick={handleNav}>
            <Link to="/calc">Calculator</Link>
          </li>
          <li className='p-4 border-b border-b-grey-900' onClick={handleNav}>
            <Link to="/rpc">R P S</Link>
          </li>
          <li className='p-4 border-b border-b-grey-900' onClick={handleNav}>
            <Link to="/"></Link>
          </li>
          <li className='p-4 border-b border-b-grey-900' onClick={handleNav}>
            <Link to="/"></Link>
          </li>
        </ul>
      </div>

    </div>

    </>
  )
}

export default Navbar
