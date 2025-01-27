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
          className="font-bold hero-heading text-center opacity-0 text-4xl sm:text-6xl lg:text-8xl mt-10 px-4"
        >
          Things that makes us Gir
        </h1>
        <div className="w-[90%] sm:w-[80%] h-auto relative overflow-hidden">
          {/* Bento grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full h-[40vh] sm:h-[30vh] md:h-[40vh] rounded-lg bg-slate-400 col-span-2 lg:col-span-1"></div>
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-lg bg-slate-400 col-span-1 lg:col-span-1"></div>
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-lg bg-slate-400 col-span-1 lg:col-span-1"></div>
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-lg bg-slate-400 col-span-1 lg:col-span-1"></div>
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-lg bg-slate-400 col-span-2 lg:col-span-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
