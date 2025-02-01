import React from "react";
import { Main, About, OurIdentity, Faq } from "./components";
import { useRef, ReactLenis, useCardAnim} from "./utils";
const App = () => {
  const Container = useRef();
  //Custom Hook for card animation hooks folder me dhek lena
  useCardAnim(Container);


  return (
    <div className="app" ref={Container}>
      <ReactLenis root>
        <Main />
        <About />
        <OurIdentity />
        <section className="w-screen min-h-screen outro mb-10">
          <h1 className="font-bold hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
            Student Life @ Gir
          </h1>
        </section>
       <Faq/>
      </ReactLenis>
    </div>
  );
};

export default App;
