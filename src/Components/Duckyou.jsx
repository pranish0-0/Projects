import React, { useEffect } from 'react';

const Duckyou = () => {
    useEffect(() => {
        const nam = document.getElementById('typing');
        const text = "Chala ja bsdkk..!";
        let index = 0;

        function typing() {
            if (index < text.length) {
                nam.innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(typing, 75);
            }
        }        

        setTimeout(typing, 650);

        return () => {
            // Cleanup function to clear the timeout if component unmounts
            clearTimeout(typing);
        };
    }, []);

    return (
        <>
            <h1 className='max-md:text-2xl lg:text-5xl md:text-5xl text-center grid '>
                <marquee><span className='max-md:text-5xl md:text-7xl lg:text-8xl text-red-700 mb-4'>Duck <span className='text-white'>You </span></span>
                </marquee>
            </h1>

            <div className='flex justify-center mt-18 h-60 w-full'>
                <iframe className='giphy-embed w-48' src="https://giphy.com/embed/2CQ17CNvaVcTEOebbG" title="duck-gif" frameborder="0"></iframe>
            </div>

            <div className='flex justify-center text-white mt-12 text-3xl' id="typing"></div>
        </>
    );
}

export default Duckyou;
