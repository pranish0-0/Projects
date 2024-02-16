import React from 'react'
import { Link } from "react-router-dom";
import {BsCalculator} from 'react-icons/bs'
import {SlNotebook} from 'react-icons/sl'
import { BsClock } from 'react-icons/bs';
import logo from './images/logo.png'

const Home = () => {
  return (
    <>
    <h1 className='max-md:text-2xl lg:text-5xl md:text-5xl text-center grid '>
        <span className='max-md:text-5xl md:text-7xl lg:text-8xl text-red-700 mb-4'>Project Ideas For</span>
        <span className='text-white'>Web Developers</span>
    </h1>

    <div className="flex flex-row justify-around mt-16 text-2xl max-sm:flex-col max-sm:justify-items-center max-sm:w-3/5 max-sm:ml-20">
        <ul className='text-white leading-loose sm:w-3/12'>
            <li className='pt-9'>
                 <Link to="/calc" className='inline-flex w-full'> 1. Calculator <BsCalculator className='pl-2' size={40}/></Link>
            </li>
            <li className='pt-9'>
                  <Link to="/rpc" className='inline-flex w-full'>2. Rock Paper Scissors <img src={logo} className="App-logo" alt="logo" width={"100px"}/></Link>
            </li>
            <li className='pt-9'>
                  <Link to="/note" className='inline-flex w-full'>3. Note App <SlNotebook size={40}/></Link>
            </li>
            <li className='pt-9'>
                  <Link to="/stopwatch" className='inline-flex w-full'>4. Stop Watch &nbsp;<BsClock size={40}/></Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>5. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>6. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>7. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>8. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>9. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>10. </Link>
            </li>
        </ul>
        <ul className="text-white leading-loose sm:w-3/12">
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>11. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>12. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>13. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>14. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>15. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>16. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>17. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>18. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>19. </Link>
            </li>
            <li className='pt-9'>
                  <Link to="/" className='inline-flex w-full'>20. </Link>
            </li>
        </ul>
    </div>

    </>
  )
}

export default Home