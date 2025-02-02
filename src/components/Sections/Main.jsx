import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import Header from "../Sub_Components/Header";
import { useMouseMagnet3D } from "../../hooks/useMouseMagnet3D";

// Register GSAP plugins for extended functionality
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Main = () => {
  // Refs for DOM elements
  const container = useRef(null);
  const expandRecRef = useRef(null);
  const Transform = useRef(null);
  const textRef = useRef(null);

  // Component state management
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [cors, setCors] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Effect for responsive device detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      setIsTablet(window.matchMedia("(max-width: 1024px)").matches);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle handler for expand/collapse interactions
  const handleExpandClick = () => {
    setisClicked(prev => !prev);
  };

  // GSAP animation for expand/collapse transitions
  useGSAP(() => {
    const tl = gsap.timeline();
    if (cors) {
      if (!isFullScreen) {
        // EXPAND ANIMATION SEQUENCE
        const expandWidth = isMobile ? '95dvw' : isTablet ? '90dvw' : '80dvw';
        const expandHeight = isMobile ? '80dvh' : isTablet ? '70dvh' : '80dvh';

        tl.to([".ha1", ".ha2"], {
          opacity: 0,
          y: "-5vh",
          duration: 0.5,
          ease: "power4.inOut"
        })
        .to(textRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power4.inOut"
        })
        .add(() => {
          gsap.set(Transform.current, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            transformPerspective: 0
          });
          expandRecRef.current.style.pointerEvents = "none";
        })
        .to(expandRecRef.current, {
          width: expandWidth,
          height: expandHeight,
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            expandRecRef.current.style.pointerEvents = "auto";
          }
        });
        setIsFullScreen(true);
      } else {
        // COLLAPSE ANIMATION SEQUENCE
        const collapseSize = isMobile ? '12rem' : isTablet ? '14rem' : '16rem';

        tl.to(expandRecRef.current, {
          width: collapseSize,
          height: collapseSize,
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          borderRadius: "0.5rem",
          duration: 1,
          ease: "power4.inOut",
          onStart: () => {
            expandRecRef.current.style.pointerEvents = "none";
          },
          onComplete: () => {
            setIsFullScreen(false);
            expandRecRef.current.style.pointerEvents = "auto";
          }
        })
        .to([".ha1", ".ha2"], {
          opacity: 1,
          y: "0vh",
          duration: 0.5,
          ease: "power4.inOut"
        })
        .to(textRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power4.inOut"
        });
      }
    }
  }, [isClicked, isMobile, isTablet]);

  // Initial loading animations
  useGSAP(
    () => {
      gsap.timeline()
        .to(".ha1", { 
          x: isMobile ? "-2vw" : isTablet ? "-3vw" : "-4vw",
          duration: 1,
          ease: "power4.inOut"
        })
        .to(".ha2", {
          x: isMobile ? "8vw" : isTablet ? "12vw" : "16vw",
          duration: 1,
          ease: "power4.inOut"
        })
        .to(".expand_rec", {
          scale: 1,
          duration: 1,
          ease: "power4.out",
          onComplete: () => {
            setCors(true);
            setIsFullScreen(false);
            gsap.to(textRef.current, {
              text: "Welcome to the Lions' Den",
              duration: 3,
              ease: "power2.out",
              yoyo: true
            });
          }
        });
    },
    { scope: container }
  );

  // 3D mouse interaction effects
  useMouseMagnet3D(
    Transform,
    container,
    [isFullScreen],
    isFullScreen,
    0.3,
    "power4.out",
    800,
    0.08,
    0.08
  );

  return (
    <div 
      className="min-h-screen min-w-screen overflow-hidden relative"
      ref={container}
    >
      <Header />
      
      <section className="flex justify-center items-center gap-4 h-screen">
        <div ref={Transform} className="flex justify-center items-center gap-4">
          <h1
            className="ha1 hero-heading special-font text-4xl font-zentry z-10"
            style={{ userSelect: "none" }}
          >
            G<b>I</b>R{" "}
          </h1>

          <div
            ref={expandRecRef}
            className="expand_rec"
            style={{
              position: "absolute",
              transformStyle: "preserve-3d",
              willChange: "transform",
              cursor: "pointer",
              width: isMobile ? '10rem' : isTablet ? '12rem' : '16rem',
              height: isMobile ? '10rem' : isTablet ? '12rem' : '16rem',
              top: "50%",
              userSelect: "none",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0)",
              borderRadius: "0.5rem",
              overflow: "hidden",
              zIndex: isFullScreen ? 11 : 1,
            }}
            onClick={handleExpandClick}
          >
            <picture>
              <source 
                srcSet="https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=480&q=80" 
                media="(max-width: 768px)"
              />
              <source
                srcSet="https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=800&q=80"
                media="(max-width: 1024px)"
              />
              <img
                src="https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=1200&q=80"
                alt="Responsive lion den"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>

          <h1
            className="ha2 hero-heading special-font font-zentry z-10"
            style={{ userSelect: "none" }}
          >
            HO<b>U</b>SE
          </h1>
        </div>
      </section>

      <section className="absolute bottom-20 w-screen flex align-middle items-center justify-center">
        <p
          ref={textRef}
          className="special-font z-10 font-robert-medium text-2xl center"
          style={{ whiteSpace: "nowrap" }}
        ></p>
      </section>
    </div>
  );
};

export default Main;
