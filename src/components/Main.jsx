import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const container = useRef(null);
  const expandRecRef = useRef(null);
  const textRef = useRef(null); 
  let onls = false;
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".ha1", {
        x: -60,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(".ha2", {
        x: 240,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(".expand_rec", {
        scale: 1,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          onls = true;
          gsap.to(textRef.current, {
            text: "Welcome to the Lions' Den", 
            duration: 3,
            ease: "power2.out",
            yoyo: true, 
          });
        },
      });
    },
    { scope: container }
  );

  
  useEffect(() => {
    const expandRec = expandRecRef.current;

    const handleMouseMove = (event) => {
      if (onls) {
        const rect = expandRec.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;

        const strength = 0.05; 
        const rotationStrength = 0.03; 
        gsap.to(expandRec, {
          x: offsetX * strength,
          y: offsetY * strength,
          rotationY: offsetX * rotationStrength, 
          rotationX: -offsetY * rotationStrength, 
          transformPerspective: 800,
          duration: 0.3,
          ease: "power4.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(expandRec, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "power4.out",
      });
    };

    container.current.addEventListener("mousemove", handleMouseMove);
    container.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.current.removeEventListener("mousemove", handleMouseMove);
      container.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden" ref={container}>
      <section className="flex justify-center items-center gap-4 absolute-center">
        <h1 className="ha1 hero-heading special-font text-4xl font-zentry">
          G<b>I</b>R{" "}
        </h1>
        <div
          ref={expandRecRef}
          className="expand_rec object-cover object-center w-64 h-64 overflow-hidden rounded-lg scale-0 absolute"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform", 
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1618641662184-bafefb91a542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwYmxhY2slMjBsaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="enter_into_gir_world"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="ha2 hero-heading special-font font-zentry">
          HO<b>U</b>SE
        </h1>
      </section>
      <section className="absolute bottom-20 w-screen flex align-middle items-center justify-center">
        <p
          ref={textRef}
          className="special-font z-10 font-robert-medium text-2xl center"
          style={{ whiteSpace: "nowrap" }} 
        >
          {/* Initial empty text for typewriter effect */}
        </p>
      </section>
    </div>
  );
};

export default Main;
