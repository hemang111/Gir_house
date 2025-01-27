import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen relative min-h-screen">
      <section className="flex flex-col justify-center items-center gap-10">
        <h1
          ref={headingRef}
          className="font-bold hero-heading text-center opacity-0 !text-8xl mt-10"
        >
          Things that makes us Gir
        </h1>
        <div className="w-[80%] h-[80dvw] relative overflow-hidden">
            <div className="w-[100%] h-[40%] rounded-lg bg-slate-400">

           </div>
           <div className="flex w-[100%] h-[60%] pt-10 pb-10 gap-[3%]"> 
                <div className="w-[48.5%] h-[100%] rounded-lg bg-slate-400">

                </div>

                <div className="w-[48.5%] h-[100%] flex flex-col gap-[3%]">
                    <div className="w-[100%] h-[48.5%] rounded-lg bg-slate-400">
                        </div>
                    <div className="w-[100%] h-[48.5%] rounded-lg bg-slate-400">
                        </div>
                </div>                  
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
