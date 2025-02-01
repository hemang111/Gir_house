import React from "react";
import Marquee1 from "../Sub_Components/Marquee";
import { Accordion, AccordionDetails, AccordionSummary , useRef , useState} from "../../utils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMouseMagnet3D } from "../../hooks/useMouseMagnet3D";
const Faq = () => {
const container = useRef(null);
  const [expanded, setExpanded] = React.useState("panel1");
  const isFullScreen = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const parentRef = useRef(null);
  useMouseMagnet3D(
    container,
    parentRef,
    [],
    isFullScreen,
    0.3,
    "power4.out",
    0.2,
    0.5
  );
  return (
    <section ref = {parentRef} className="flex flex-col items-center   w-screen min-h-screen  mb-10">
      <h1 className="font-bold hero-heading text-center text-4xl sm:text-6xl lg:text-8xl mt-10 px-4">
        Frequently Asked Questions
      </h1>
      <div
        style={{
          marginTop: "2rem",
          width: "60%",
          marginBottom: 10,
          overflow: "hidden",
          borderRadius: "10px",
          border: "1.5px solid black",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Accordion
            key={item}
            onChange={handleChange(`panel${item}`)}
            expanded={expanded === `panel${item}`}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderBottom: "1px solid black",
            }}
            defaultExpanded={item === 1 ? true : false}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item}d-content`}
              id={`panel${item}d-header`}
            >
              <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
                Accordion {item}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div ref={container} style={{
                    position:"relative",
                    padding:"2rem",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
      }}>
      <Marquee1/>
      </div>
    </section>
  );
};

export default Faq;
