import React from "react";
import { Main, About, OurIdentity, Marquee1 } from "./components";
import { useRef, ReactLenis, useCardAnim } from "./utils";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        <section className="m-7 w-screen min-h-screen outro mb-10">
          <h1 className="font-bold hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
            Student Life @ Gir
          </h1>
        </section>
        <section className="m-7 flex flex-col items-center   w-screen min-h-screen  mb-10" >
          <h1 className="font-bold hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
            Frequently Asked Questions
          </h1>

          {/* A simple container to add gap between the heading and accordion items */}
          <div style={{ marginTop: "2rem", width: "60%" , marginBottom:10}}>
            {[1, 2, 3, 4, 5,6,7,8,9,10].map((item) => (
              <Accordion
                key={item}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${item}-content`}
                  id={`panel${item}-header`}
                >
                  <h2 style={{ margin: 0 , fontSize: "1.5rem" }}>Accordion {item}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        <Marquee1 />
        </section>
      </ReactLenis>
    </div>
  );
};

export default App;
