import React from 'react'
import Main from './components/Main'
import Header from "./components/Header";
import {ReactLenis,useLenis} from 'lenis/react'
import About from './components/About';

const App = () => {
  return (
    <ReactLenis root>
    <Main/>
    <About/>
    </ReactLenis>
  )
}

export default App