import React from 'react'
import Main from './components/Main'
import { useRef ,useEffect} from 'react';
import {ReactLenis,useLenis} from 'lenis/react'
import About from './components/About';
import OurIdentity from './components/OurIdentity';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  }, { scope: Container })
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

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
    </ReactLenis>
    </div>
  )
}

export default App