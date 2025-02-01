import React from 'react'
import Marquee from 'react-fast-marquee';
const Marquee1 = () => {
  return (
    <section className='relative'>
    <Marquee className='absolute flex h-full justify-start overflow-hidden font-semibold text-yellow-400 font-zentry items-center text-9xl bg-red-400 left-[-100px] origin-center' style={{border: '2px solid black', rotate: '9deg' , width:'150dvw' }} direction='right'  speed={200}>
    <h1 className='ml-2'>  Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
    </Marquee>
    <Marquee className='absoulute flex h-full justify-start overflow-hidden text-red-400  font-semibold font-zentry items-center text-9xl bg-yellow-400 left-[-100px] top-[-1.8em]' direction='left' speed={200} style={{border: '2px solid black', rotate: '-9deg' , width:'150dvw' }}>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
    </Marquee>
    </section> 
  )
}

export default Marquee1