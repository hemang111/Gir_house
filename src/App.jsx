import React from 'react'
import Main from './components/Main'
import { useRef ,useEffect} from 'react';
import {ReactLenis,useLenis} from 'lenis/react'
import About from './components/About';
import OurIdentity from './components/OurIdentity';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from 'react-fast-marquee';
const App = () => {
  const Container = useRef();
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card')
    ScrollTrigger.create({
      trigger: cards[0],
      start: 'top 35%',
      endTrigger: cards[cards.length - 1],
      end: 'top 30%',
      pin: '.intro',
      pinSpacing: false,
    })
    cards.forEach((card, index) => {
      const isLast = index === cards.length-1;
      const cardInner = card.querySelector('.card-inner')

      if (!isLast) {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 35%',
          endTrigger: '.outro',
          end: 'top 65%',
          pin: true,
          pinSpacing: false,
          pinType: 'transform',
          anticipatePin: 1
        })

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 35%',
            endTrigger: '.outro',
            end: 'top 65%',
            scrub: true,
            
          }
        })
      }
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, { scope: Container })



  return (
    <div className="app" ref={Container}>
    <ReactLenis root>
    <Main/>
    <About/>
    <OurIdentity/>
    <section className='m-7 w-screen min-h-screen outro' >
    <h1 className="font-bold hero-heading text-center  text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
          Student Life@ Gir
        </h1>
       
    </section>
    <section className='relative'>
    <Marquee className='absolute flex h-full justify-start overflow-hidden font-semibold text-yellow-400 font-zentry items-center text-9xl bg-red-400 left-[-100px] origin-center' style={{border: '2px solid black', rotate: '9deg' , width:'150dvw' }} direction='right'  speed={200}>
    <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-yellow-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
    </Marquee>
    <Marquee className='absoulute flex h-full justify-start overflow-hidden text-yellow-400  font-semibold font-zentry items-center text-9xl bg-yellow-400 left-[-100px] top-[-1.8em]' direction='left' speed={200} style={{border: '2px solid black', rotate: '-9deg' , width:'150dvw' }}>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
     <h1 className='ml-2'> Gir </h1><div className='ml-2 h-16 w-16 bg-red-400 rounded-full'></div> <h1 className='ml-2 mr-5'>The Lion's Ascent</h1>
    </Marquee>
    </section> 
    </ReactLenis>
    </div>
  )
}

export default App