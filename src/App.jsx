import React from 'react'
import {Main,About,OurIdentity,Marquee1} from './components'
import {useRef,ReactLenis,useCardAnim} from './utils'
const App = () => {
  const Container = useRef();
  //Custom Hook for card animation hooks folder me dhek lena
  useCardAnim(Container);
  return (
    <div className="app" ref={Container}>
    <ReactLenis root>
    <Main/>
    <About/>
    <OurIdentity/>
    <section className='m-7 w-screen min-h-screen outro' >
    <h1 className="font-bold hero-heading text-center  text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
          Student Life @ Gir
        </h1>
       
    </section>
    <Marquee1/>
    </ReactLenis>
    </div>
  )
}

export default App